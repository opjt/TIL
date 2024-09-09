import{_ as a,r as e,o as t,c as o,a as n,b as l,d as p,e as c}from"./app-s96BU1Ua.js";const i={},r=n("h1",{id:"알고리즘-문제-풀이",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#알고리즘-문제-풀이"},[n("span",null,"알고리즘 문제 풀이")])],-1),d=n("h2",{id:"프로그래머스-코딩테스트-연습-스택-큐-올바른-괄호",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#프로그래머스-코딩테스트-연습-스택-큐-올바른-괄호"},[n("span",null,"프로그래머스 코딩테스트 연습 > 스택/큐 > 올바른 괄호")])],-1),u={href:"https://school.programmers.co.kr/learn/courses/30/lessons/12909",target:"_blank",rel:"noopener noreferrer"},k=c(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>문제 설명
괄호가 바르게 짝지어졌다는 것은 &#39;(&#39; 문자로 열렸으면 반드시 짝지어서 &#39;)&#39; 문자로 닫혀야 한다는 뜻입니다. 예를 들어

&quot;()()&quot; 또는 &quot;(())()&quot; 는 올바른 괄호입니다.
&quot;)()(&quot; 또는 &quot;(()(&quot; 는 올바르지 않은 괄호입니다.
&#39;(&#39; 또는 &#39;)&#39; 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 &#39;(&#39; 또는 &#39;)&#39; 로만 이루어져 있습니다.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>내 풀이</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">for</span> char <span class="token keyword">in</span> s<span class="token punctuation">:</span>
        <span class="token keyword">if</span> char <span class="token operator">==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">:</span>
            stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>char<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># char == &#39;)&#39;</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> stack<span class="token punctuation">:</span>  <span class="token comment"># 스택이 비어있는 경우 잘못된 괄호</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 스택에서 &#39;(&#39;를 꺼냄</span>
    
    <span class="token comment"># 모든 괄호 처리 후 스택이 비어있어야 올바른 괄호 문자열</span>
    <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>해당 문제는 스택을 활용하여 간단하게 풀이할 수 있다<br> 처음에는 괄호의 카운트를 저장하여 확인하는 로직을 생각하였으나 해당방식이 더 간단할 것 같아서 작성<br> 다른사람의 풀이도 보았는데 pop 부분을 예외처리로 하여</p></blockquote><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>    <span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">except</span> IndexError<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>하는 방법도 있었다</p></blockquote><p>하루의 한 문제라도 알고리즘 문제를 푸는 습관을 들여야겠습니다..</p>`,7);function v(m,b){const s=e("ExternalLinkIcon");return t(),o("div",null,[r,d,n("p",null,[n("a",u,[l("https://school.programmers.co.kr/learn/courses/30/lessons/12909"),p(s)])]),k])}const y=a(i,[["render",v],["__file","240827.html.vue"]]),_=JSON.parse('{"path":"/daily/2408/240827.html","title":"240827","lang":"en-US","frontmatter":{"title":240827},"headers":[{"level":2,"title":"프로그래머스 코딩테스트 연습 > 스택/큐 > 올바른 괄호","slug":"프로그래머스-코딩테스트-연습-스택-큐-올바른-괄호","link":"#프로그래머스-코딩테스트-연습-스택-큐-올바른-괄호","children":[]}],"git":{"updatedTime":1725887659000},"filePathRelative":"daily/2408/240827.md"}');export{y as comp,_ as data};
