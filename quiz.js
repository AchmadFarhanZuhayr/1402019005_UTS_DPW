function	check(){
	var c =0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var nilai = document.getElementById('nilai');

	if(q1=="Pernapasan") {c++}
	if(q2=="Pembatasan Sosial Berskala Besar") {c++}
	if(q3=="Kalelawar") {c++}
	if(q4=="Cina") {c++}
	if(q5=="Semua Benar") {c++}


	nilai.textContent=`Nilai akhir Anda adalah ${c}`;

}