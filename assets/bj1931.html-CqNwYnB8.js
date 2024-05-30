import{_ as a,r as t,o as p,c as e,a as n,b as o,d as l,e as c}from"./app-BtblK0Ye.js";const i={},u={href:"https://www.acmicpc.net/problem/1931",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="풀이-코드" tabindex="-1"><a class="header-anchor" href="#풀이-코드"><span>풀이 코드</span></a></h2><p><strong>잘못된 접근</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>count <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># </span>

<span class="token builtin">min</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">**</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">1</span>
<span class="token builtin">max</span> <span class="token operator">=</span> <span class="token number">0</span>
result <span class="token operator">=</span> <span class="token number">0</span>
lng <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;=</span> <span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">min</span> <span class="token operator">=</span> x
        <span class="token builtin">max</span> <span class="token operator">=</span> y
        result <span class="token operator">=</span> result <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token comment"># lng.append(str(x) + &quot; &quot; + str(y))</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> y<span class="token operator">&lt;=</span> <span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">min</span> <span class="token operator">=</span> x
        result <span class="token operator">=</span> result <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token comment"># lng.append(str(x) + &quot; &quot; + str(y))</span>
        
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># for i in range(len(lng)):</span>
<span class="token comment">#     print(lng[i])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>처음에는 정렬을 생각하지 않고 단순하게 앞에 있는 숫자와 뒤에 있는 숫자를 저장해서 풀이를 접근하였다<br> 하지만 계속 오답처리가 되었다<br> 이유는 예를 들어 (3,5) (1,2) 가 입력되었을때 (2,3)도 가능하지만 위의 코드로는 min이 1, max가 5가 되어 조건문이 통과될 수 없었다</p><p><strong>해결 코드</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>N <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

meetings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    start<span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    meetings<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span>

meetings<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

count <span class="token operator">=</span> <span class="token number">0</span>
last_end_time <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> start<span class="token punctuation">,</span> end <span class="token keyword">in</span> meetings<span class="token punctuation">:</span>
    <span class="token keyword">if</span> start <span class="token operator">&gt;=</span> last_end_time<span class="token punctuation">:</span>
        count <span class="token operator">+=</span> <span class="token number">1</span>
        last_end_time <span class="token operator">=</span> end

<span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#예제 입력</span>
<span class="token number">3</span>
<span class="token number">3</span> <span class="token number">5</span> 
<span class="token number">1</span> <span class="token number">2</span>
<span class="token number">2</span> <span class="token number">3</span>

meetings<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 이후 정렬된 값
<span class="token number">1</span> <span class="token number">2</span>
<span class="token number">2</span> <span class="token number">3</span>
<span class="token number">3</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(d,m){const s=t("ExternalLinkIcon");return p(),e("div",null,[n("p",null,[n("a",u,[o("https://www.acmicpc.net/problem/1931"),l(s)])]),r])}const b=a(i,[["render",k],["__file","bj1931.html.vue"]]),g=JSON.parse('{"path":"/algorithm/bj1931.html","title":"백준 1931번","lang":"en-US","frontmatter":{"title":"백준 1931번"},"headers":[{"level":2,"title":"풀이 코드","slug":"풀이-코드","link":"#풀이-코드","children":[]}],"git":{"updatedTime":1717029203000},"filePathRelative":"algorithm/bj1931.md"}');export{b as comp,g as data};
