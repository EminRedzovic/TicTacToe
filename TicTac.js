var a=0;
var T,B,C;
var D,E,F;
var G,H,J;
document.getElementById('A').addEventListener('click',function(){
    if(a===0){
        document.getElementById('A').textContent = "X";
        a=1;
        T=1;
    }
    else if(a===1){
        document.getElementById('A').textContent = "O";
        a=0;
        T=2;
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('B').addEventListener('click',function(){
    if(a===0){
        document.getElementById('B').textContent = "X";
        a=1;
        B=1
    }
    else if(a===1){
        document.getElementById('B').textContent = "O";
        a=0;
        B=2;
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('C').addEventListener('click',function(){
    if(a===0){
        document.getElementById('C').textContent = "X";
        a=1;
        C=1;
    }
    else if(a===1){
        document.getElementById('C').textContent = "O";
        a=0;
        C=2;
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('D').addEventListener('click',function(){
    if(a===0){
        document.getElementById('D').textContent = "X";
        a=1;
        D=1
    }
    else if(a===1){
        document.getElementById('D').textContent = "O";
        a=0;
        D=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('E').addEventListener('click',function(){
    if(a===0){
        document.getElementById('E').textContent = "X";
        a=1;
        E=1;
    }
    else if(a===1){
        document.getElementById('E').textContent = "O";
        a=0;
        E=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('F').addEventListener('click',function(){
    if(a===0){
        document.getElementById('F').textContent = "X";
        a=1;
        F=1
    }
    else if(a===1){
        document.getElementById('F').textContent = "O";
        a=0;
        F=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('G').addEventListener('click',function(){
    if(a===0){
        document.getElementById('G').textContent = "X";
        a=1;
        G=1
    }
    else if(a===1){
        document.getElementById('G').textContent = "O";
        a=0;
        G=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('H').addEventListener('click',function(){
    if(a===0){
        document.getElementById('H').textContent = "X";
        a=1;
        H=1
    }
    else if(a===1){
        document.getElementById('H').textContent = "O";
        a=0;
        H=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
})
document.getElementById('J').addEventListener('click',function(){
    if(a===0){
        document.getElementById('J').textContent = "X";
        a=1;
        J=1
    }
    else if(a===1){
        document.getElementById('J').textContent = "O";
        a=0;
        J=2
    }
    if(T==1 && B==1 && C==1 || D==1 && T==1 && G==1 || C==1 && F==1 && J==1 || J==1 && H==1 && G==1 || C==1 && E==1 && G==1 || D==1 && E==1 && F==1 || T==1 && E==1 && J==1 || B==1 && E==1 && H==1){
        alert("X has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=1;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    else if(T==2 && B==2 && C==2 || D==2 && T==2 && G==2 || C==2 && F==2 && J==2 || J==2 && H==2 && G==2 || C==2 && E==2 && G==2 || D==2 && E==2 && F==2 || T==2 && E==2 && J==2|| B==2 && E==2 && H==2){
        alert("O has won")
        document.getElementById('A').textContent = "";
        document.getElementById('B').textContent = "";
        document.getElementById('C').textContent = "";
        document.getElementById('D').textContent = "";
        document.getElementById('E').textContent = "";
        document.getElementById('F').textContent = "";
        document.getElementById('G').textContent = "";
        document.getElementById('H').textContent = "";
        document.getElementById('J').textContent = "";
        a=0;
        T=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        J=0;
    }
    
})
document.getElementById('Reset').addEventListener('click',function(){
    document.getElementById('A').textContent = "";
    document.getElementById('B').textContent = "";
    document.getElementById('C').textContent = "";
    document.getElementById('D').textContent = "";
    document.getElementById('E').textContent = "";
    document.getElementById('F').textContent = "";
    document.getElementById('G').textContent = "";
    document.getElementById('H').textContent = "";
    document.getElementById('J').textContent = "";
    a=0;
    T=0;
    B=0;
    C=0;
    D=0;
    E=0;
    F=0;
    G=0;
    H=0;
    J=0;
})
