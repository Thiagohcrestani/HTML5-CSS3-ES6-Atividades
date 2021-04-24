/*alert(0);
console.log()*/
$(document).ready(() => {

    const exemploReduce = () => {

        let array = [10, 30, 20, 4];

        let total = array.reduce((x, value) => x += value);
        console.log("reduce: " + total);

        let mult = (value) => value * 2;

        var arrayMap = array.map(mult);
        console.log("Array Map " + arrayMap);

        var arrayFilter = array.filter((value) => value % 2 == 0);
        console.log("Array Filter " + arrayFilter);

        const pares = (value) => value => value % 2 == 0;

        console.log("direto " + array.filter(pares).map(mult));

    }

    exemploReduce();

    var formNoticias = $("#formulario-noticias")

    formNoticias.on("submit", () => {

        try {
            var json = recordFromForm(formNoticias)
            saveRecord(json);
            addDataTable(json);
        } catch (e) {
            console.error(e);
        }
        return false;
    });

    const recordFromForm = (form) => {
        var inputs = form.find('input[type="text"], textarea')
        var json = "";
        //console.log(inputs)
        inputs.each(function (idx, input) {
            var name = $(input).attr("name");
            var value = $(input).val();
            /*console.log(name);
            console.log(value);*/
            if (json !== "")
                json += ",";
            console.log(json);
            json += `"${name}" : "${value.trim()}"`;

        });

        json = `{${json}}`;
        /console.log(json);/
        return JSON.parse(json)
    }

    const addDataTable = (noticiasjson) => {
        var tbody = $("#table-noticias tbody");
        var tr = $("<tr></tr>");
        var tdTitulo = $("<td></td>");
        var tdIntroducao = $("<td></td>");
        var tdAcoes = $("<td></td>");

        tdTitulo.text(noticiasjson['titulo']);
        tdIntroducao.text(noticiasjson['introducao']);

        var deletar = $("<button type='button' class='btn-sm btn-danger bi-trash-fill'>Remover</button>")
        tdAcoes.append(deletar);

        deletar.on("click", () => removeRow(tr));

        tr.append(tdTitulo, tdIntroducao, deletar);
        tbody.append(tr);

        showRowCount();

    }

    const removeRow = (tr) => {
        let idx = tr.index();

        tr.remove();
        showRowCount();

        let data = logdata();
        if (data.length > 0){
            data.splice(idx, 1);
            saveData(data);
        }
    }

    const showRowCount = () => $("#table-noticias tfoot tr td span").text(countRow());

    const countRow = () => $("#table-noticias tbody tr").length;

    const STORAGE_NAME = "news";

    const saveRecord = (record) => {
        let data = logdata();
        data.push(record);
        saveData(data);
    }

    const saveData = (data) => {
        data = JSON.stringify(data);
        localStorage.setItem(STORAGE_NAME, data);
    }

    const logdata = () => {
        let data = localStorage.getItem(STORAGE_NAME);
        if (!data)
            data = []
        else
            data = JSON.parse(data);
        return data;
    }

    const loadTable = () => {
        let data = logdata();
        for (json of data)
            addDataTable(json);
    }

    loadTable();

});