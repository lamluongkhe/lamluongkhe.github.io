click=false;
function mua(){
    var hoten=document.forms.dangky["hoten"].value;
    var email=document.forms.dangky["mail"].value;
    var soluong=document.forms.dangky["soluong"].value;
    var ngaynhan=document.forms.dangky["ngaynhan"].value;
    var thanhtoan=document.forms.dangky["thanhtoan"].value;
    baoloi=document.getElementById("baoloi").innerHTML;
    if(hoten==null||hoten==""){
        baoloi+="<br>Họ tên không được để trống";
    }
    if(email==null||email==""){
       baoloi+="<br>Email đang trống";
    }
    if(soluong==null|| soluong==""|| soluong<=0){
       baoloi+="<br>Số lượng không được để trống và phải lớn hơn 0";
    }
    if(ngaynhan==null||ngaynhan=="")
    {
        baoloi+="<br>Ngày nhận không được để trống";
    }
    if(thanhtoan==null||thanhtoan=="")
    {
        baoloi+="<br>Bạn phải chọn phương thức thanh toán";
    }
    if(click==false)
    {
        if( baoloi!=null||baoloi!=""){
        document.getElementById("baoloi").innerHTML=baoloi;
        click=true;
        return false;
    }
}
}
function xoa(){
    document.getElementById("baoloi").innerHTML="";
}