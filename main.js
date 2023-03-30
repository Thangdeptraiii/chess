function banco() {

    var banco = document.getElementById('banco');
    var dem = 0;
    for(i=0;i<=63;i++) {
        if (i%8==0) {
            dem++;
            var hang = document.createElement('div');
            hang.className = "row hang"+dem;
            banco.appendChild(hang);
        }
        if (i%2==0) {
            var trang = document.createElement('div');
            trang.className = "cell trang";
            hang.appendChild(trang);
        }
        else {
            var den = document.createElement('div');
            den.className = "cell den";
            hang.appendChild(den);
        }
    }
}
banco();