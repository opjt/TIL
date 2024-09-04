import{_ as e,o as i,c as l,e as n}from"./app-rYRBf4Qe.js";const a={},d=n(`<h1 id="힙-자료구조-우선-순위-큐" tabindex="-1"><a class="header-anchor" href="#힙-자료구조-우선-순위-큐"><span>힙 자료구조, 우선 순위 큐</span></a></h1><p>우선 힙 자료구조에 대해 알아보자</p><h2 id="힙-이란" tabindex="-1"><a class="header-anchor" href="#힙-이란"><span>힙 이란?</span></a></h2><p>힙(Heap) 자료구조는 완전 이진 트리 형태를 가진 특수한 트리 기반 데이터 구조로, 일반적으로 <strong>최대 힙(Max-Heap)</strong> 과 <strong>최소 힙(Min-Heap)</strong> 두 가지 형태가 있습니다. 힙 자료구조는 주로 우선순위 큐를 구현할 때 사용됩니다.</p><blockquote><p>그럼 이진 트리는 뭐고 우선순위 큐는 뭔데</p></blockquote><h2 id="우선순위-큐" tabindex="-1"><a class="header-anchor" href="#우선순위-큐"><span>우선순위 큐</span></a></h2><p>우선순위 큐(Priority Queue)는 큐(Queue) 자료구조의 변형으로, 각 요소마다 우선순위가 부여된 데이터 구조입니다. 일반적인 큐는 <strong>선입선출(FIFO, First In First Out)</strong> 방식으로 동작하지만, 우선순위 큐는 우선순위가 높은 요소가 먼저 처리됩니다.</p><h2 id="이진트리" tabindex="-1"><a class="header-anchor" href="#이진트리"><span>이진트리</span></a></h2><ul><li>이진트리(Binary Tree)는 트리 중에서도 각 노드가 최대 2개의 자식노드를 지닐 때의 트리 형태를 말합니다</li><li>이진트리의 경우 자식노드가 최대 2개이기 때문에 자식이 없을 수도 있고 있을 수도 있습니다</li><li>이때 자식노드를 왼쪽 자식노드, 오른쪽 자식노드로 표현합니다</li></ul><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>        1 
       / \\
      3   5
     / \\ / 
    6  8 7  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>완전 이진트리</strong></p><ul><li><strong>완전 이진 트리(Complete Binary Tree)</strong> 는 모든 레벨이 완전히 채워져 있으며, 마지막 레벨은 왼쪽에서 오른쪽 순서로 채워져야 합니다</li></ul><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code> o)     1            x)     1           x)     1 
       / \\                 / \\                / \\
      3   5               3   5              3   5
     / \\ / \\             / \\   \\            / \\
    6  8 9  7           6  8    7          6   8
                                          /
                                         9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>o): 올바른 예. 모든 레벨이 완전히 채워져 있고, 마지막 레벨도 왼쪽에서 오른쪽으로 순차적으로 채워진 완전 이진 트리입니다.</li><li>x): 잘못된 예 1. 마지막 레벨에서 9가 비어 있고, 7이 오른쪽에만 존재하므로 완전 이진 트리의 조건을 만족하지 않습니다.</li><li>x): 잘못된 예 2. 마지막 레벨에서 9가 왼쪽에만 존재하고 오른쪽이 비어 있으므로 완전 이진 트리의 조건을 충족하지 못합니다.</li></ul><h2 id="최대-힙-max-heap" tabindex="-1"><a class="header-anchor" href="#최대-힙-max-heap"><span>최대 힙(Max Heap)</span></a></h2><p>최대 힙은 부모 노드의 값이 자식 노드의 값보다 크거나 같아야 합니다</p><h3 id="최대-힙-삽입" tabindex="-1"><a class="header-anchor" href="#최대-힙-삽입"><span>최대 힙 - 삽입</span></a></h3><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>     15                          15    
   /    \\                      /    \\
  10     12      --&gt;         10     13
 /  \\   /  \\                 /  \\   /  \\
8   9  4   [13]             8   9  4   12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>최대 힙에 <code>13</code>을 삽입할 경우 완전 이진 트리 속성을 유지하기 위해 트리의 가장 마지막 자리에 삽입됩니다.</li><li>힙정렬: 삽입된 <code>13</code>은 부모 노드인 12 보다 크기 때문에 두 노드를 교환 합니다</li><li><code>13</code>의 부모노드인 <code>15</code>가 더 크기 때문에 삽입이 완료됩니다.</li></ol><h3 id="최대-힙-삭제" tabindex="-1"><a class="header-anchor" href="#최대-힙-삭제"><span>최대 힙 - 삭제</span></a></h3><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>                                [12]    
   /    \\                      /    \\
  10     13      --&gt;         10     13
 /  \\   /  \\                 /  \\   /  \\
8   9  4   [12]             8   9  4   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>루트 노드를 삭제하고 마지막 노트를 루트로 이동시킵니다.</li><li>힙정렬: 루트로 이동된 12는 자식 노드인 13보다 작기 때문에 두 노드를 교환합니다</li></ol><h2 id="최소-힙-min-heap" tabindex="-1"><a class="header-anchor" href="#최소-힙-min-heap"><span>최소 힙(Min Heap)</span></a></h2><p>최소 힙은 노드의 값이 자식 노드의 값보다 작거나 같아야 합니다.</p><h3 id="최소-힙-삽입" tabindex="-1"><a class="header-anchor" href="#최소-힙-삽입"><span>최소 힙 - 삽입</span></a></h3><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>     1                        1  
   /    \\                  /    \\
  2      5       --&gt;      2      [4]
 /  \\   /  \\             /  \\   /  \\
6   8  9   [4]          6    8  9   5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>최소 힙에 <code>4</code>을 삽입할 경우 완전 이진 트리 속성을 유지하기 위해 트리의 가장 마지막 자리에 삽입됩니다.</li><li>힙정렬: 삽입된 <code>4</code>은 부모 노드인 <code>5</code> 보다 작기 때문에 두 노드를 교환 합니다</li><li>부모 노드인 <code>1</code> 보다는 크기 때문에 더이상 교환이 필요하지 않습니다</li></ol><h3 id="최소-힙-삭제" tabindex="-1"><a class="header-anchor" href="#최소-힙-삭제"><span>최소 힙 - 삭제</span></a></h3><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>    [1]            3
   /   \\         /   \\
  3     5 --&gt;   (9)     5
 / \\   /       / \\   
6   8  9      6   8  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>루트 노드를 삭제하고 마지막 노트를 루트로 이동시킵니다.(1삭제 &gt; 9를 루트로 이동)</li><li>힙 정렬 (Heapify-down): 루트 자리로 이동한 9는 두 자식 노드 3과 5보다 큽니다. 자식 중 더 작은 값인 3과 교환합니다.</li><li>9의 자식인 6과 8과 비교하여 6과 교환합니다.</li><li>최종</li></ol><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>     3
   /   \\
  6     5
 / \\   
9   8   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),s=[d];function t(r,c){return i(),l("div",null,s)}const u=e(a,[["render",t],["__file","240904.html.vue"]]),o=JSON.parse('{"path":"/daily/2409/240904.html","title":"240904","lang":"en-US","frontmatter":{"title":240904},"headers":[{"level":2,"title":"힙 이란?","slug":"힙-이란","link":"#힙-이란","children":[]},{"level":2,"title":"우선순위 큐","slug":"우선순위-큐","link":"#우선순위-큐","children":[]},{"level":2,"title":"이진트리","slug":"이진트리","link":"#이진트리","children":[]},{"level":2,"title":"최대 힙(Max Heap)","slug":"최대-힙-max-heap","link":"#최대-힙-max-heap","children":[{"level":3,"title":"최대 힙 - 삽입","slug":"최대-힙-삽입","link":"#최대-힙-삽입","children":[]},{"level":3,"title":"최대 힙 - 삭제","slug":"최대-힙-삭제","link":"#최대-힙-삭제","children":[]}]},{"level":2,"title":"최소 힙(Min Heap)","slug":"최소-힙-min-heap","link":"#최소-힙-min-heap","children":[{"level":3,"title":"최소 힙 - 삽입","slug":"최소-힙-삽입","link":"#최소-힙-삽입","children":[]},{"level":3,"title":"최소 힙 - 삭제","slug":"최소-힙-삭제","link":"#최소-힙-삭제","children":[]}]}],"git":{"updatedTime":1725456576000},"filePathRelative":"daily/2409/240904.md"}');export{u as comp,o as data};
