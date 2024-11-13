import{S as L,a as b,i as d}from"./assets/vendor-BGz2EIcA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function f(a){return a.map(({webformatURL:t,largeImageURL:r,tags:s,likes:e,views:o,comments:i,downloads:y})=>`
        <li class="photo-card">
    <a href="${r}">
    <img class="photo-card-img"
    src="${t}"
    alt="${s}"
    />
</a>
<div class="info">
        <p class="info-item">
            <span>Likes</span>
            ${e}
        </p>
        <p class="info-item">
            <span>Views</span>
            ${o}
        </p>
        <p class="info-item">
            <span>Comments</span>
            ${e}
        </p>
        <p class="info-item">
            <span>Downloads</span>
            ${y}
        </p>
    </div>
</li>
`).join("")}function g(a,t){t.insertAdjacentHTML("beforeend",a);let r=new L(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});r.refresh(),r.on("show.simplelightbox")}const v="46939525-73ecae044838d7dfbbfadb664",S="https://pixabay.com/api/";async function h(a,t=1){return await b(S,{params:{key:v,page:t,per_page:15,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const m=document.querySelector(".search-field"),w=document.querySelector("button"),u=document.querySelector(".gallery"),p=document.querySelector(".loader-icon-container"),n=document.querySelector(".js-load-more");let c=1,l;w.addEventListener("click",q);n.addEventListener("click",M);async function q(a){a.preventDefault(),n.classList.add("load-more-hidden"),u.innerHTML="",p.classList.toggle("loader"),l=m.value.trim();try{const{data:t}=await h(l,c),r=t.hits;if(r.length===0||l==="")d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const s=f(r);g(s,u),n.classList.remove("load-more-hidden")}}catch(t){d.error({message:t.message,position:"topRight"})}finally{p.classList.toggle("loader"),m.value=""}}async function M(a){a.preventDefault(),scrollTopBtn.style.display="block",n.disabled=!0,c+=1,p.classList.toggle("loader");try{const{data:t}=await h(l,c),r=t.hits;if(t.totalHits<=c*15)n.classList.add("load-more-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{const s=f(r);g(s,u);const o=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}}catch(t){d.error({message:t.message,position:"topRight"})}finally{p.classList.toggle("loader"),n.disabled=!1}}
//# sourceMappingURL=index.js.map
