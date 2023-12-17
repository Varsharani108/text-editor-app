function run()
{
    var code=document.getElementById("code").value;
    var result_box=document.getElementById("result");
    result_box.innerHTML=code;
    var code_box=document.getElementById("code-box");
    code_box.style.display="none";
    var result_box=document.getElementById("result_box");
    result_box.style.display="block";
    result_box.setAttribute("class","animate__animated animate__slideInRight");
    var btn=document.getElementById("run_btn");
    btn.style.display="none";
    var r_btn=document.getElementById("icon");
    r_btn.style.display="block";
    

}
function back(){
    var result_box=document.getElementById("result_box");
    result_box.style.display="none";
    var code_box=document.getElementById("code-box");
    code_box.style.display="block";
    code_box.setAttribute("class","animate__animated animate__slideInLeft");
    var r_btn=document.getElementById("icon");
    r_btn.style.display="none";
    var btn=document.getElementById("run_btn");
    btn.style.display="block";
    

}