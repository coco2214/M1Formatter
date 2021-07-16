
function makeTable(data, tableId){
    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");

    // 表に2次元配列の要素を格納
    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));

            cell.style.height = "50px";
            // cell.style.marginLeft = "auto";
            // cell.style.marginRight = "auto";

            table.style.width = "800px";
            table.border = "solid 1px #c1c1c1";

            if(j==0){
                cell.style.width = "600px";
                cell.style.padding = "0px 20px";
                cell.style.textAlign =  "left";
            }else{
                cell.style.width = "200px";
                cell.style.textAlign = "center";
                if (cell.innerHTML == "通過"){
                    cell.style.color = "red";
                }
            }

            //背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#d7a22a"; // ヘッダ行
                cell.style.textAlign = "center";
                cell.style.fontWeight = "bold";
            }else if(i%2==0){
                cell.style.backgroundColor = "#e4e4e4";
                cell = document.createElement("tr")
                // ヘッダ行以外
            }else{
                cell.style.backgroundColor = "white";
            }


        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}

function enter() {
    const success = document.getElementById("success-area").value;
    const successes = success.split(/\r\n|\n/);

    const all = document.getElementById("all-area").value;
    const alls = all.split(/\r\n|\n/);

    var hantei = [["コンビ名","結果"]];

    for (let combi = 0; combi < alls.length; combi++) {

        let combiname = alls[combi];
        let bool = successes.includes(alls[combi]);
        let result = "";

        if (bool == true){
            result = "通過";
        }else{
            result = "敗退";
        }

        hantei.push([combiname, result]);

    }

    console.log(hantei);
    makeTable(hantei, "table");
}
