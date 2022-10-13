import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const m='{"title":"Modal \u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useModal","slug":"usemodal"},{"level":2,"title":"useModalInner","slug":"usemodalinner"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/modal.md","lastUpdated":1652066744938}',p={},o=t(`<h1 id="modal-\u5F39\u7A97"><a class="header-anchor" href="#modal-\u5F39\u7A97" aria-hidden="true">#</a> Modal \u5F39\u7A97</h1><p>\u5BF9 antv \u7684 modal \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5\uFF0C\u6269\u5C55\u62D6\u62FD\uFF0C\u5168\u5C4F\uFF0C\u81EA\u9002\u5E94\u9AD8\u5EA6\u7B49\u529F\u80FD</p><p>\u4EE3\u7801\u8DEF\u5F84 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Modal" target="_blank" rel="noopener noreferrer">src/components/Modal</a></p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><strong>\u7531\u4E8E\u5F39\u7A97\u5185\u4EE3\u7801\u4E00\u822C\u4F5C\u4E3A\u5355\u6587\u4EF6\u7EC4\u4EF6\u5B58\u5728\uFF0C\u4E5F\u63A8\u8350\u8FD9\u6837\u505A\uFF0C\u6240\u4EE5\u793A\u4F8B\u90FD\u4E3A\u5355\u6587\u4EF6\u7EC4\u4EF6\u5F62\u5F0F</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F <code>v-bind=&quot;$attrs&quot;</code>\u8BB0\u5F97\u5199\uFF0C\u7528\u4E8E\u5C06\u5F39\u7A97\u7EC4\u4EF6\u7684 <code>attribute</code> \u4F20\u5165 <code>BasicModal</code> \u7EC4\u4EF6</p></div><div class="language-vue"><pre><code>// Modal.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Modal Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>\u63D0\u793A1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u63D0\u793A2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Modal Info.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>\u9875\u9762\u5F15\u7528\u5F39\u7A97</strong></p><div class="language-vue"><pre><code>// Page.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">&#39;./Modal.vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openModal <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        register<span class="token punctuation">,</span>
        openModal<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="usemodal"><a class="header-anchor" href="#usemodal" aria-hidden="true">#</a> useModal</h2><p>\u7528\u4E8E\u5916\u90E8\u7EC4\u4EF6\u8C03\u7528</p><p><strong>useModal</strong> \u7528\u4E8E\u64CD\u4F5C\u7EC4\u4EF6</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>register</strong></p><p>register \u7528\u4E8E\u6CE8\u518C <code>useModal</code>\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 <code>useModal</code> \u63D0\u4F9B\u7684 api\uFF0C\u5FC5\u987B\u5C06 <code>register</code> \u4F20\u5165\u7EC4\u4EF6\u7684 <code>onRegister</code>\u3002</p><p>\u539F\u7406\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5C31\u662F vue \u7684\u7EC4\u4EF6\u5B50\u4F20\u7236\u901A\u4FE1\uFF0C\u5185\u90E8\u901A\u8FC7 <code>emit(&quot;register&quot;\uFF0Cinstance)</code> \u5B9E\u73B0\u3002</p><p>\u540C\u65F6\u72EC\u7ACB\u51FA\u53BB\u7684\u7EC4\u4EF6\u9700\u8981\u5C06 <code>attrs</code> \u7ED1\u5B9A\u5230 <code>BasicModal</code> \u4E0A\u9762\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>openModal</strong></p><p>\u7528\u4E8E\u6253\u5F00/\u5173\u95ED\u5F39\u7A97</p><div class="language-tsx"><pre><code><span class="token comment">// true/false: \u6253\u5F00\u5173\u95ED\u5F39\u7A97</span>
<span class="token comment">// data: \u4F20\u9012\u5230\u5B50\u7EC4\u4EF6\u7684\u6570\u636E</span>
<span class="token function">openModal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>closeModal</strong></p><p>\u7528\u4E8E\u5173\u95ED\u5F39\u7A97</p><div class="language-ts"><pre><code><span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>setModalProps</strong></p><p>\u7528\u4E8E\u66F4\u6539 modal \u7684 props \u53C2\u6570\u56E0\u4E3A modal \u5185\u5BB9\u72EC\u7ACB\u6210\u7EC4\u4EF6\uFF0C\u5982\u679C\u5728\u5916\u90E8\u9875\u9762\u9700\u8981\u66F4\u6539 props \u53EF\u80FD\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u6240\u4EE5\u63D0\u4F9B <strong>setModalProps</strong> \u65B9\u4FBF\u66F4\u6539\u5185\u90E8 modal \u7684 props</p><p><a href="#Props">Props</a> \u5185\u5BB9\u53EF\u4EE5\u89C1\u4E0B\u65B9</p><div class="language-ts"><pre><code><span class="token function">setModalProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="usemodalinner"><a class="header-anchor" href="#usemodalinner" aria-hidden="true">#</a> useModalInner</h2><p>\u7528\u4E8E\u72EC\u7ACB\u7684 Modal \u5185\u90E8\u8C03\u7528</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span>
    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Modal Title<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>\u63D0\u793A1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u63D0\u793A2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeModal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mr-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setModalProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4ECE\u5185\u90E8\u4FEE\u6539title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicModal<span class="token punctuation">,</span> useModalInner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModalInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        register<span class="token punctuation">,</span>
        closeModal<span class="token punctuation">,</span>
        <span class="token function-variable function">setModalProps</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setModalProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Modal New Title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>useModalInner</strong>\u7528\u4E8E\u64CD\u4F5C\u72EC\u7ACB\u7EC4\u4EF6</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModalInner</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>callback</strong></p><p>type: <code>(data:any)=&gt;void</code></p><p>\u56DE\u8C03\u51FD\u6570\u7528\u4E8E\u63A5\u6536 openModal \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u7684\u503C</p><div class="language-ts"><pre><code><span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>closeModal</strong></p><p>\u7528\u4E8E\u5173\u95ED\u5F39\u7A97</p><div class="language-ts"><pre><code><span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>changeOkLoading</strong></p><p>\u7528\u4E8E\u4FEE\u6539\u786E\u8BA4\u6309\u94AE\u7684 loading \u72B6\u6001</p><div class="language-ts"><pre><code><span class="token function">changeOkLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>changeLoading</strong></p><p>\u7528\u4E8E\u4FEE\u6539 modal \u7684 loading \u72B6\u6001</p><div class="language-tsx"><pre><code><span class="token comment">// true or false</span>
<span class="token function">changeLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>setModalProps</strong></p><p>\u7528\u4E8E\u66F4\u6539 modal \u7684 props \u53C2\u6570\u56E0\u4E3A modal \u5185\u5BB9\u72EC\u7ACB\u6210\u7EC4\u4EF6\uFF0C\u5982\u679C\u5728\u5916\u90E8\u9875\u9762\u9700\u8981\u66F4\u6539 props \u53EF\u80FD\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u6240\u4EE5\u63D0\u4F9B <strong>setModalProps</strong> \u65B9\u4FBF\u66F4\u6539\u5185\u90E8 modal \u7684 props</p><p><a href="#Props">Props</a> \u5185\u5BB9\u53EF\u4EE5\u89C1\u4E0B\u65B9</p><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u9664\u4EE5\u4E0B\u53C2\u6570\u5916\uFF0C\u7EC4\u4EF6\u5E93\u6587\u6863\u5185\u7684 props \u4E5F\u90FD\u652F\u6301\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://2x.antdv.com/components/modal-cn/#API" target="_blank" rel="noopener noreferrer">antv modal</a></p></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>modal \u6807\u9898</td></tr><tr><td>height</td><td><code>number</code></td><td>-</td><td>-</td><td>\u56FA\u5B9A modal \u7684\u9AD8\u5EA6</td></tr><tr><td>minHeight</td><td><code>number</code></td><td>-</td><td>-</td><td>\u8BBE\u7F6E modal \u7684\u6700\u5C0F\u9AD8\u5EA6</td></tr><tr><td>draggable</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>\u662F\u5426\u5F00\u542F\u62D6\u62FD</td></tr><tr><td>useWrapper</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>\u662F\u5426\u5F00\u542F\u81EA\u9002\u5E94\u9AD8\u5EA6\uFF0C\u5F00\u542F\u540E\u4F1A\u8DDF\u968F\u5C4F\u5E55\u53D8\u5316\u81EA\u9002\u5E94\u5185\u5BB9\uFF0C\u5E76\u51FA\u73B0\u6EDA\u52A8\u6761</td></tr><tr><td>wrapperFooterOffset</td><td><code>number</code></td><td>0</td><td>-</td><td>\u5F00\u542F\u662F\u9002\u5E94\u9AD8\u5EA6\u540E\uFF0C\u5982\u679C\u8D85\u8FC7\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u5E95\u90E8\u548C\u9876\u90E8\u4F1A\u4FDD\u6301\u4E00\u6837\u7684\u95F4\u8DDD\uFF0C\u8BE5\u53C2\u6570\u53EF\u4EE5\u7528\u6765\u7F29\u5C0F\u5E95\u90E8\u7684\u95F4\u8DDD</td></tr><tr><td>canFullscreen</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>\u662F\u5426\u53EF\u4EE5\u8FDB\u884C\u5168\u5C4F</td></tr><tr><td>defaultFullscreen</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>\u9ED8\u8BA4\u5168\u5C4F</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>loading \u72B6\u6001</td></tr><tr><td>loadingTip</td><td><code>string</code></td><td>-</td><td>-</td><td>loading \u6587\u672C</td></tr><tr><td>showCancelBtn</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr><tr><td>showOkBtn</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>\u663E\u793A\u786E\u8BA4\u6309\u94AE</td></tr><tr><td>helpMessage</td><td><code>string , string[]</code></td><td>-</td><td>-</td><td>\u6807\u9898\u53F3\u4FA7\u63D0\u793A\u6587\u672C</td></tr><tr><td>centered</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>\u662F\u5426\u5C45\u4E2D\u5F39\u7A97</td></tr><tr><td>cancelText</td><td><code>string</code></td><td>&#39;\u5173\u95ED&#39;</td><td>-</td><td>\u5173\u95ED\u6309\u94AE\u6587\u672C</td></tr><tr><td>okText</td><td><code>string</code></td><td>&#39;\u4FDD\u5B58&#39;</td><td>-</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u672C</td></tr><tr><td>closeFunc</td><td><code>() =&gt; Promise&lt;boolean&gt;</code></td><td>\u5173\u95ED\u51FD\u6570</td><td>-</td><td>\u5173\u95ED\u524D\u6267\u884C\uFF0C\u8FD4\u56DE true \u5219\u5173\u95ED\uFF0C\u5426\u5219\u4E0D\u5173\u95ED</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ok</td><td><code>function(e)</code></td><td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03</td></tr><tr><td>cancel</td><td><code>function(e)</code></td><td>\u70B9\u51FB\u53D6\u6D88\u56DE\u8C03</td></tr><tr><td>visible-change</td><td><code>(visible:boolean)=&gt;{}</code></td><td>\u6253\u5F00\u6216\u8005\u5173\u95ED\u89E6\u53D1</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u533A\u57DF</td></tr><tr><td>footer</td><td>\u5E95\u90E8\u533A\u57DF(\u4F1A\u66FF\u6362\u6389\u9ED8\u8BA4\u7684\u6309\u94AE)</td></tr><tr><td>insertFooter</td><td>\u5173\u95ED\u6309\u94AE\u7684\u5DE6\u8FB9(\u4E0D\u4F7F\u7528footer\u63D2\u69FD\u65F6\u6709\u6548)</td></tr><tr><td>centerFooter</td><td>\u5173\u95ED\u6309\u94AE\u548C\u786E\u8BA4\u6309\u94AE\u7684\u4E2D\u95F4(\u4E0D\u4F7F\u7528footer\u63D2\u69FD\u65F6\u6709\u6548)</td></tr><tr><td>appendFooter</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u53F3\u8FB9(\u4E0D\u4F7F\u7528footer\u63D2\u69FD\u65F6\u6709\u6548)</td></tr></tbody></table>`,57),e=[o];function c(l,u,d,i,r,k){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
