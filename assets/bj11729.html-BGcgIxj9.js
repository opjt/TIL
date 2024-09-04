import{_ as p,r as i,o,c,a as n,b as s,d as e,e as t}from"./app-rYRBf4Qe.js";const l={},u=n("h1",{id:"백준-11729번",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#백준-11729번"},[n("span",null,"백준 11729번:")])],-1),r={href:"https://www.acmicpc.net/problem/11729",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="풀이-코드" tabindex="-1"><a class="header-anchor" href="#풀이-코드"><span>풀이 코드</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hanoi</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> fromm<span class="token punctuation">,</span> to<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">#원반 수, 출발지, 목적지, 나머지</span>
    <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>
    hanoi<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> fromm<span class="token punctuation">,</span> other<span class="token punctuation">,</span> to<span class="token punctuation">)</span>  <span class="token comment"># 1번째 -&gt; 받아온 원반 갯수보다 하나적은 원반들을 목적지가 아닌 곳으로 이동</span>
    move<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>fromm<span class="token punctuation">,</span> to<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 2번째 -&gt; 마지막 원반을 목적지로 이동</span>
    hanoi<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> other<span class="token punctuation">,</span> to<span class="token punctuation">,</span> fromm<span class="token punctuation">)</span> <span class="token comment">#3번째 -&gt; 다른 곳으로 옮겼던 원반들을 그 위에 얹는다.</span>

n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
move <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

hanoi<span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> 

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>move<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> move<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={href:"https://youtu.be/aPYE0anPZqI?si=B_Ekzy8kVLWSFaUU&t=215",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=t(`<h3 id="gpt야-이해를-도와줘" tabindex="-1"><a class="header-anchor" href="#gpt야-이해를-도와줘"><span>GPT야 이해를 도와줘</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>n = 3 일 때
전체 호출 과정 요약:
hanoi(3, 1, 3, 2)
    hanoi(2, 1, 2, 3)
        hanoi(1, 1, 3, 2)
            hanoi(0, 1, 2, 3)
            출력: 1 3
            hanoi(0, 2, 3, 1)
        출력: 1 2
        hanoi(1, 3, 2, 1)
            hanoi(0, 3, 1, 2)
            출력: 3 2
            hanoi(0, 1, 2, 3)
    출력: 1 3
    hanoi(2, 2, 3, 1)
        hanoi(1, 2, 1, 3)
            hanoi(0, 2, 3, 1)
            출력: 2 1
            hanoi(0, 3, 1, 2)
        출력: 2 3
        hanoi(1, 1, 3, 2)
            hanoi(0, 1, 2, 3)
            출력: 1 3
            hanoi(0, 2, 3, 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런류의 알고리즘 풀이는 직접 노트로 그려가면서 푸는 것이 제일 이해가 잘되는 것 같다</p>`,3);function b(h,_){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[s("https://www.acmicpc.net/problem/11729"),e(a)])]),d,n("p",null,[n("a",k,[s("https://youtu.be/aPYE0anPZqI?si=B_Ekzy8kVLWSFaUU&t=215"),e(a)]),v,s(" 해당 영상에서 아주 설명이 잘 되어 있다")]),m])}const f=p(l,[["render",b],["__file","bj11729.html.vue"]]),x=JSON.parse('{"path":"/algorithm/bj11729.html","title":"백준 11729번","lang":"en-US","frontmatter":{"title":"백준 11729번"},"headers":[{"level":2,"title":"풀이 코드","slug":"풀이-코드","link":"#풀이-코드","children":[{"level":3,"title":"GPT야 이해를 도와줘","slug":"gpt야-이해를-도와줘","link":"#gpt야-이해를-도와줘","children":[]}]}],"git":{"updatedTime":1725456576000},"filePathRelative":"algorithm/\\bbj11729.md"}');export{f as comp,x as data};
