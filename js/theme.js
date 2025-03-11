const themeBtn=document.getElementById("theme-btn")
const themes=[
    'bg-slate-200',
    'bg-red-200',
    'bg-blue-200',
    'bg-yellow-100',
    'bg-purple-300',
    'bg-pink-100',
    'bg-indigo-200',
    'bg-teal-300',
    'bg-orange-50'
]
themeBtn.addEventListener("click",function(){
for(const theme of themes){
    document.body.classList.remove(theme)

}
// const randomColor=themes[Math.floor(Math.random()*themes.length)]
const randomColor = themes[Math.floor(Math.random() * themes.length)];
document.body.classList.add(randomColor)
})