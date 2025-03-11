const themeBtn=document.getElementById("theme-btn")
const themes=[
    'bg-slate-200',
    'bg-red-100',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-indigo-100',
    'bg-teal-100',
    'bg-orange-100'
]
themeBtn.addEventListener("click",function(){
for(const theme of themes){
    document.body.classList.remove(theme)

}
// const randomColor=themes[Math.floor(Math.random()*themes.length)]
const randomColor = themes[Math.floor(Math.random() * themes.length)];
document.body.classList.add(randomColor)
})