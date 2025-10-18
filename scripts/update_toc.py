import re
from pathlib import Path
import subprocess


# --- 설정 ---
docs_dir = Path("docs")
readme_path = Path("README.md")
start_marker = "<!-- AUTO_TOC_START -->"
end_marker = "<!-- AUTO_TOC_END -->"

# --- .md 파일 검색 ---
md_files = [f for f in docs_dir.rglob("*.md")]

# --- MD 파일 개수 출력 ---
print(f"총 Markdown 파일 수: {len(md_files)}")

# 파일별 (path, 수정시간) 리스트
files_with_mtime = [(f, f.stat().st_mtime) for f in md_files]

# 수정시간 기준 내림차순 정렬
files_sorted = sorted(files_with_mtime, key=lambda x: x[1], reverse=True)

# --- TOC 생성 ---
toc_lines = [start_marker + "\n"]
toc_lines.append(f"### TIL TOC (최근 수정순, 총 {len(md_files)}개)\n\n")

for f, _ in files_sorted:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
        # 첫 번째 H1 헤더 찾기
        match = re.search(r"^# (.+)$", content, re.MULTILINE)
        title = match.group(1).strip() if match else f.stem
    # 상대 경로 링크
    relative_path = f.relative_to(readme_path.parent).as_posix()
    toc_lines.append(f"- [{title}]({relative_path})\n")

toc_lines.append(end_marker + "\n")

# --- 기존 README 읽기 ---
with open(readme_path, "r", encoding="utf-8") as f:
    content = f.read()

# --- 마커 사이 교체 ---
pattern = re.compile(f"{re.escape(start_marker)}.*?{re.escape(end_marker)}", re.DOTALL)
new_content = pattern.sub("".join(toc_lines), content)

# --- README 갱신 ---
with open(readme_path, "w", encoding="utf-8") as f:
    f.write(new_content)
subprocess.run(["git", "add", "README.md"])
print("README.md TOC 갱신 완료!")
