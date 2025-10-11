# k8s 초기 설정

> 해당 설정은 `Ubuntu 24.04.2 LTS` 기준입니다.

- [공식 문서](https://kubernetes.io/ko/docs/setup/production-environment/)

**스왑 설정**

```bash
sudo swapoff -a
# fstab 마운트 끄기
sudo sed -i '/swap/ s/^/#/' /etc/fstab
```

**모듈, 네트워크 설정**

```bash
# ip 포워딩
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.ipv4.ip_forward = 1
EOF
# 모듈 설정
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF
sudo modprobe overlay
sudo modprobe br_netfilter

# Apply sysctl params without reboot
sudo sysctl --system
```

**k8s 패키지 설치**

```bash
sudo apt-get update
# apt-transport-https may be a dummy package; if so, you can skip that package
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg


# If the folder `/etc/apt/keyrings` does not exist, it should be created before the curl command, read the note below.
# sudo mkdir -p -m 755 /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.33/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
sudo chmod 644 /etc/apt/keyrings/kubernetes-apt-keyring.gpg # allow unprivileged APT programs to read this keyrin

# This overwrites any existing configuration in /etc/apt/sources.list.d/kubernetes.list
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.33/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo chmod 644 /etc/apt/sources.list.d/kubernetes.list   # helps tools such as command-not-found to work correctly

sudo apt-get install -y kubelet kubeadm kubectl #쿠버네티스 패키지 버전 고정
sudo apt-mark hold kubelet kubeadm kubectl
```

**containerd설정**

```bash
sudo apt install -y containerd
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml

sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
# fasle -> true 로 변경 cgroup 을 systemd로 변경
sudo systemctl restart containerd
sudo systemctl enable containerd
```

**마스터 노드**

```bash

sudo kubeadm init --pod-network-cidr=10.244.0.0/16

# kubectl을 쓰기 위한 설정
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config


# CNI 설정
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

- 마스터 노드에서 `kubeadm init`을 하면 `kubeadm join ~~~` 명령어가 나온는데 해당 명령어를 워커노드에 적용하면 끝.

아래 명령어로 잘 설정되었는지 확인하면 됩니다.

```bash
$ kubectl get nodes
NAME       STATUS   ROLES           AGE     VERSION
master     Ready    control-plane   3h35m   v1.33.2
worker01   Ready    <none>          138m    v1.33.2
```
