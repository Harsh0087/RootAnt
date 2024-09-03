function show() {
    const { jsPDF } = window.jspdf
    var doc = new jsPDF();
    doc.setFont("helvica")
    doc.setTextColor("blue")
    doc.setFontSize(25)
    doc.text("PUNJABI UNIVERSITY", 70, 20);
    doc.setTextColor("RED")
    doc.setFontSize(16)
    doc.text("NAME: BINOD KUMAR", 20, 50);
    doc.text("ROLL NUMBER: 132287", 20, 60);
    doc.text("SEMESTER: 4", 20, 70);
    doc.text("CENTER OF EXAM: MEETING MEETING HALL", 20, 80);
    doc.setLineWidth(10)
    doc.setDrawColor("red")
    doc.line(10, 100, 200, 100)
    doc.setTextColor("GREEN")
    doc.text("SUBJECT", 20, 100);
    doc.text("EXAM DATE", 80, 100);
    doc.setLineWidth(10)
    doc.setDrawColor("white")
    doc.line(10, 107, 200, 107)
    doc.setTextColor("BLACK")
    doc.text("JAVA", 20, 110);
    doc.setLineWidth(10)
    doc.setDrawColor("green")
    doc.line(10, 117, 200, 117)
    doc.text("E-COMMERCE", 20, 120);
    doc.setLineWidth(10)
    doc.setDrawColor("white")
    doc.line(10, 127, 200, 127)
    doc.text("SOFTWARE ENGINEERING", 20, 130);
    doc.setLineWidth(10)
    doc.setDrawColor("green")
    doc.line(10, 137, 200, 137)
    doc.text("C++", 20, 140);
    //images
    
    var img = new Image();
    img.src = "binod.jpg";
    doc.addImage(img,150,30,50,50)
    
    
    doc.save("mypdf.pdf");
}