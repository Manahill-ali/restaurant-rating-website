ToDolistData = (function () {

    var list = ["i like this website :)", "this resturant is awsome!"];

    return {

        addtolist: function (task) {
            list.push(task);
        },

        getLastItem: function () {

            return list[list.length - 1];
        }
    }

})();

ToDolistUI = (function () {

    var DOMstrings = {

        input: "#add",
        btn: "#btn",
        list: "#list"

    }

    return {

        addtoList: function (newItem) {


            li = document.createElement('li');

            li.innerHTML = newItem;

            list = document.querySelector(DOMstrings.list);

            //list.insertBefore(li, list.childNodes[0]);
            list.appendChild(li);

            input = document.querySelector(DOMstrings.input);
            input.value = '';



        },
        getDOMstrings: function () {
            return DOMstrings;
        },

        getInput: function () {

            return document.querySelector(DOMstrings.input).value;

        }


    }
})();

controller = (function (data, view) {

    var setupEventListeners = function () {

        var DOM = view.getDOMstrings();
        document.querySelector(DOM.btn).addEventListener('click', AddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                AddItem();
            }
        }); // i can press (enter)to add a new comment
        



    }

    var AddItem = function () {

        var input;
        input = view.getInput();
        if (input == '') {


            alert('you must write something');


        } else {
        data.addtolist(input);
        view.addtoList(data.getLastItem()); }

    }

    return {

        init: function () {

            setupEventListeners();
        }

    }

})(ToDolistData, ToDolistUI);

controller.init();
