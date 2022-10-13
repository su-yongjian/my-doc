import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"\u9ED1\u6697\u4E3B\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u5207\u6362","slug":"\u5207\u6362"}],"relativePath":"dep/dark.md","lastUpdated":1652066744944}',p={},e=t(`__VP_STATIC_START__<h1 id="\u9ED1\u6697\u4E3B\u9898"><a class="header-anchor" href="#\u9ED1\u6697\u4E3B\u9898" aria-hidden="true">#</a> \u9ED1\u6697\u4E3B\u9898</h1><h2 id="\u4ECB\u7ECD"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u9879\u76EE\u5DF2\u7ECF\u5185\u7F6E\u4E86\u9ED1\u6697\u4E3B\u9898\u5207\u6362\uFF0C\u53EA\u9700\u914D\u7F6E\u81EA\u5DF1\u9700\u8981\u7684\u989C\u8272\u53D8\u91CF\uFF0C\u5373\u53EF\u5728\u9879\u76EE\u4E2D\u4F7F\u7528</p><h2 id="\u539F\u7406"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u901A\u8FC7 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> \u63D2\u4EF6\uFF0C\u5C06\u6240\u6709\u7684\u989C\u8272\u53D8\u91CF\u62BD\u53D6\u5230\u72EC\u7ACB\u7684 css \u6587\u4EF6\uFF0C\u5E76\u4E14\u5168\u90E8\u5728 html \u4E0A\u9762\u52A0\u4E0A css \u9009\u62E9\u5668\u3002\u901A\u8FC7\u6539\u53D8 html \u6807\u7B7E\u7684 <code>data-theme</code> \u5C5E\u6027\u6765\u8FDB\u884C\u9ED1\u6697\u4E3B\u9898\u5207\u6362</p><h2 id="\u914D\u7F6E"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u9ED1\u6697\u4E3B\u9898\u989C\u8272\u914D\u7F6E\u901A\u8FC7 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> \u5B9E\u73B0\uFF0C\u5177\u4F53\u4EE3\u7801\u5728 <code>build/vite/plugin/theme</code></p><div class="language-ts"><pre><code><span class="token function">antdDarkThemePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  darkModifyVars<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">generateModifyVars</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;text-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#c9d1d9&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;text-color-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#c9d1d9&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;component-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#151515&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;text-color-secondary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#8b949e&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;border-color-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#303030&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;item-active-bg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#111b26&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;app-content-background&#39;</span><span class="token operator">:</span> <span class="token string">&#39;rgb(255 255 255 / 4%)&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5207\u6362"><a class="header-anchor" href="#\u5207\u6362" aria-hidden="true">#</a> \u5207\u6362</h2><p>\u53EA\u9700\u8981\u4F7F\u7528 <a href="https://github.com/vbenjs/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme</a> \u63D0\u4F9B\u7684\u51FD\u6570\u6765\u8FDB\u884C\u5207\u6362\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> darkCssIsReady<span class="token punctuation">,</span> loadDarkThemeCss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-theme/es/client&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateDarkTheme</span><span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> htmlRoot <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;htmlRoot&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PROD</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>darkCssIsReady<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">loadDarkThemeCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    htmlRoot<span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    htmlRoot<span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,11),o=[e];function c(r,l,i,u,k,d){return a(),s("div",null,o)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
