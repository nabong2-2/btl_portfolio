gsap.registerPlugin(ScrollTrigger);

const imc = new Swiper('.imc_container .imc_contents', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
})


const box1 = document.querySelectorAll('.right_box .box_item');
console.log(box1);
for(let i of box1) i.style.opacity = '0'

gsap.to(box1 , {
    scrollTrigger: {
        trigger: box1 ,
        start: 'top 80%',
        end: 'top 20%',
        // markers: true,
        toggleActions: 'play reverse restart reverse',
        // 
        onEnter: () => {
            gsap.to(box1 ,{
                opacity: 1,
                y: 5,
                duration: 0.6,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(box1 , {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(box1 ,{
                opacity: 1,
                y: 5,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(box1 , {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
    // opacity: 1,
    // y: 5,
    // stagger: 0.1,
})

























const designSwiper = new Swiper('.web_design_wrap', {
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    slidesPerView: 1,
    // autoplay: {delay: 5000,},
    loop: true,
    
})
//카드
const cardSwiper = new Swiper('.card', {
    // slidesPerView: 1,
    autoplay: {delay: 2000,},
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
})
//배너
const bnrSwiper = new Swiper('.bnr', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:5000,
    loop: true,
    
})
//sns
const snsSwiper = new Swiper('.sns', {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:6000,
    loop: true,
})

// 디자인 배너 팝업 열고 끄기
//팝업 출력과 숨기기
const popup_bg = document.querySelector('.popup_bg');
const card = document.querySelectorAll('.card img');
const bnr = document.querySelectorAll('.bnr img');
const sns = document.querySelectorAll('.sns img');
console.log(popup_bg, bnr, sns);

popup_bg.style.display ='none';
// ================================== 2
for(let i of bnr){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '600px';
        popup_bg.children[0].style.marginTop = '120px';
    })
}       
// bnr 다시 클릭하면 사라지기(한개)
popup_bg.addEventListener('click', ()=>{
    popup_bg.style.display ='none';
})

// ================================== 1
for(let i of card){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '100px';
    })
}       
// card 다시 클릭하면 사라지기(한개)
popup_bg.addEventListener('click', ()=>{
    popup_bg.style.display ='none';
})
// ================================== 3
for(let i of sns){
    //i라는 변수가 이미지로
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block';
        console.log(i.src)
        console.log(popup_bg.children[0].children[0].src);
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '950px';
        popup_bg.children[0].style.marginTop = '300px';
    })
}       
// sns 다시 클릭하면 사라지기(한개)
popup_bg.addEventListener('click', ()=>{
    popup_bg.style.display ='none';
})