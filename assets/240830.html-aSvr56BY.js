import{_ as a,r as e,o as t,c as p,a as n,b as o,d as l,e as c}from"./app-Cq8XrIL0.js";const i={},u=n("h1",{id:"알고리즘-문제-풀이",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#알고리즘-문제-풀이"},[n("span",null,"알고리즘 문제 풀이")])],-1),r=n("h2",{id:"프로그래머스-코딩테스트-연습-해시-포켓몬",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#프로그래머스-코딩테스트-연습-해시-포켓몬"},[n("span",null,"프로그래머스 코딩테스트 연습 > 해시 > 포켓몬")])],-1),d={href:"https://school.programmers.co.kr/learn/courses/30/lessons/1845",target:"_blank",rel:"noopener noreferrer"},k=c(`<blockquote><p>당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다. 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다. 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택<br> 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택<br> 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택<br> 두 번째(1번), 세 번째(2번) 폰켓몬을 선택<br> 두 번째(1번), 네 번째(3번) 폰켓몬을 선택<br> 세 번째(2번), 네 번째(3번) 폰켓몬을 선택<br> 이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다. 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.</p></blockquote><blockquote><p>제한사항<br> nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.<br> nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.<br> 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.<br> 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.</p></blockquote><p><strong>정답</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
		<span class="token builtin">dict</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 문제는 사실 <code>set()</code>에 대해 알고 있다면 더 쉽게 풀 수 있다 문제를 보았을 때 문제 카테고리가 해시인 것 만큼<br> 딱 봐도 중복에 대한 문제라고 생각했다<br> 파이썬은 자바와 달리 이런 자료형에 대한 변환이 간단한데 이 사실을 인지하지 못하고 문제를 접근하는 경우가 허다한 것 같다 <strong>개선 방안</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">return</span> <span class="token builtin">min</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이런식으로 한줄로도 풀이가 가능하다</p><h1 id="파이썬-자주-사용하는-자료형" tabindex="-1"><a class="header-anchor" href="#파이썬-자주-사용하는-자료형"><span>파이썬 자주 사용하는 자료형</span></a></h1><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set</span></a></h2><ul><li>파이썬에서 set(집합)은 순서가 없고 중복을 허용하지 않는 요소들의 모음입니다. 수학에서의 집합 개념과 유사</li></ul><h3 id="선언" tabindex="-1"><a class="header-anchor" href="#선언"><span>선언</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 리터럴 표기법으로 생성</span>
s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

<span class="token comment"># set() 함수로 생성</span>
s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 빈 집합은 set()으로 생성 (빈 중괄호 {}는 빈 딕셔너리로 인식됨)</span>
empty_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="주요-함수" tabindex="-1"><a class="header-anchor" href="#주요-함수"><span>주요 함수</span></a></h3><p>추가</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># add(elem)</span>
s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># 출력: {1, 2, 3, 4}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>삭제</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># 출력: {1, 3, 4} , 2가 없을 경우 KeyError 발생</span>

s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># elem이 없어도 에러 발생하지 않음</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pop</p><ul><li>집합에서 임의의 요소를 제거하고 반환 집합이 비어 있으면 에러 발생</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>s<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># 예: {3, 4} (임의 요소 제거)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>new_set <span class="token operator">=</span> s<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22);function m(b,v){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",d,[o("https://school.programmers.co.kr/learn/courses/30/lessons/1845"),l(s)])]),k])}const y=a(i,[["render",m],["__file","240830.html.vue"]]),g=JSON.parse('{"path":"/daily/2408/240830.html","title":"240830","lang":"en-US","frontmatter":{"title":240830},"headers":[{"level":2,"title":"프로그래머스 코딩테스트 연습 > 해시 > 포켓몬","slug":"프로그래머스-코딩테스트-연습-해시-포켓몬","link":"#프로그래머스-코딩테스트-연습-해시-포켓몬","children":[]},{"level":2,"title":"set","slug":"set","link":"#set","children":[{"level":3,"title":"선언","slug":"선언","link":"#선언","children":[]},{"level":3,"title":"주요 함수","slug":"주요-함수","link":"#주요-함수","children":[]}]}],"git":{"updatedTime":1725775792000},"filePathRelative":"daily/2408/240830.md"}');export{y as comp,g as data};