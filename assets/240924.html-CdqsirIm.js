import{_ as n,o as s,c as a,e as t}from"./app-B_qv_7JF.js";const o={},e=t(`<h2 id="프로그래머스-코딩테스트-연습-해시-전화번호-목록" tabindex="-1"><a class="header-anchor" href="#프로그래머스-코딩테스트-연습-해시-전화번호-목록"><span>프로그래머스 코딩테스트 연습.해시.전화번호 목록</span></a></h2><blockquote><p>[문제 설명] 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다. 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.<br> 구조대 : 119<br> 박준영 : 97 674 223<br> 지영석 : 11 9552 4421<br> 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.</p></blockquote><blockquote><p>제한 사항<br> phone_book의 길이는 1 이상 1,000,000 이하입니다.<br> 각 전화번호의 길이는 1 이상 20 이하입니다.<br> 같은 전화번호가 중복해서 들어있지 않습니다.</p></blockquote><h3 id="정답-코드" tabindex="-1"><a class="header-anchor" href="#정답-코드"><span>정답 코드</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>phone_book<span class="token punctuation">)</span><span class="token punctuation">:</span>
    answer <span class="token operator">=</span> <span class="token boolean">True</span>
    phone_book<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>phone_book<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>phone_book<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> phone_book<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>phone_book<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

    <span class="token keyword">return</span> answer


<span class="token keyword">print</span><span class="token punctuation">(</span>solution<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;119&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;97674223&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1195524421&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>왜 문제 분류가 해시인지는 잘 모르겠다.<br> 슬라이싱을 통해 문자열을 비교하였지만 startswith 함수를 사용하면 더 간단하게 접근 가능</p><p>처음에는 이중포문을 사용해야하나 싶었지만 정렬을 통해 간단하게 포문 한번만으로 해결할 수 있었다</p>`,7),p=[e];function c(l,i){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","240924.html.vue"]]),k=JSON.parse('{"path":"/algorithm/programmers/240924.html","title":"코딩테스트 연습.해시.전화번호 목록","lang":"en-US","frontmatter":{"title":"코딩테스트 연습.해시.전화번호 목록","sidebarDepth":0},"headers":[{"level":2,"title":"프로그래머스 코딩테스트 연습.해시.전화번호 목록","slug":"프로그래머스-코딩테스트-연습-해시-전화번호-목록","link":"#프로그래머스-코딩테스트-연습-해시-전화번호-목록","children":[{"level":3,"title":"정답 코드","slug":"정답-코드","link":"#정답-코드","children":[]}]}],"git":{"updatedTime":1727183520000},"filePathRelative":"algorithm/programmers/240924.md"}');export{r as comp,k as data};