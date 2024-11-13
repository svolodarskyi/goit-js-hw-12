import{S as b,a as S,i}from"./assets/vendor-BGz2EIcA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function f(r){return r.map(({webformatURL:e,largeImageURL:a,tags:s,likes:t,views:o,comments:n,downloads:L})=>`
        <li class="photo-card">
    <a href="${a}">
    <img class="photo-card-img"
    src="${e}"
    alt="${s}"
    />
</a>
<div class="info">
        <p class="info-item">
            <span>Likes</span>
            ${t}
        </p>
        <p class="info-item">
            <span>Views</span>
            ${o}
        </p>
        <p class="info-item">
            <span>Comments</span>
            ${t}
        </p>
        <p class="info-item">
            <span>Downloads</span>
            ${L}
        </p>
    </div>
</li>
`).join("")}function h(r,e){e.insertAdjacentHTML("beforeend",r);let a=new b(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.refresh(),a.on("show.simplelightbox")}const v="46939525-73ecae044838d7dfbbfadb664",w="https://pixabay.com/api/";async function y(r,e=1){return await S(w,{params:{key:v,page:e,per_page:15,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const q=document.querySelector(".searching-form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader-icon-container"),p=document.querySelector(".js-load-more"),m=document.querySelector(".button-container");let c=1,l,g;q.addEventListener("submit",M);p.addEventListener("click",P);async function M(r){if(r.preventDefault(),m.classList.add("load-more-hidden"),u.innerHTML="",l=r.target.elements.search.value.trim(),!l){i.error({message:"Please enter a keyword into the search field",position:"topRight",timeout:1500});return}d.classList.toggle("loader");try{const{data:e}=await y(l,c),a=e.hits;if(a.length===0)i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:1500});else{g=e.totalHits;const s=f(a);h(s,u),m.classList.remove("load-more-hidden")}}catch(e){i.error({message:e.message,position:"topRight",timeout:5e3})}finally{d.classList.toggle("loader"),r.target.elements.search.value=""}}async function P(r){if(r.preventDefault(),p.disabled=!0,g<=c*15){m.classList.add("load-more-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}c+=1,d.classList.toggle("loader");try{const{data:e}=await y(l,c),a=e.hits;g=e.totalHits;const s=f(a);h(s,u);const o=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(e){i.error({message:e.message,position:"topRight"})}finally{d.classList.toggle("loader"),p.disabled=!1}}
//# sourceMappingURL=index.js.map
