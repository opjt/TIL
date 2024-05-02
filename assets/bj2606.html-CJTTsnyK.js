import{_ as a,r as t,o as p,c as e,a as n,b as o,d as c,e as i}from"./app-B3J-LDs_.js";const l={},u=n("h1",{id:"백준-2606번",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#백준-2606번"},[n("span",null,"백준 2606번:")])],-1),k={href:"https://www.acmicpc.net/problem/2606",target:"_blank",rel:"noopener noreferrer"},r=i(`<h2 id="풀이-코드" tabindex="-1"><a class="header-anchor" href="#풀이-코드"><span>풀이 코드</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">:</span>
    visited<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> visited<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
            dfs<span class="token punctuation">(</span>num<span class="token punctuation">)</span>

n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 컴퓨터 수</span>
m <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 연결 수</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token builtin">list</span><span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token builtin">list</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>a<span class="token punctuation">)</span>

dfs<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>해당 문제는 깊이 우선 탐색(DFS) 알고리즘이 사용되었다<br> DFS는 스택을 사용하거나 재귀함수를 사용하여 구현할 수 있는데 이번 풀이에선 재귀함수를 사용하였다<br> DFS 알고리즘을 알고 있으면 간단하게 풀 수 있는 문제다</p>`,3);function d(m,b){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[n("a",k,[o("https://www.acmicpc.net/problem/2606"),c(s)])]),r])}const h=a(l,[["render",d],["__file","bj2606.html.vue"]]),f=JSON.parse('{"path":"/algorithm/bj2606.html","title":"백준 2606번","lang":"en-US","frontmatter":{"title":"백준 2606번"},"headers":[{"level":2,"title":"풀이 코드","slug":"풀이-코드","link":"#풀이-코드","children":[]}],"git":{"updatedTime":1714642571000},"filePathRelative":"algorithm/bj2606.md"}');export{h as comp,f as data};
