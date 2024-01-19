var users = document.querySelector(".users");
      var current_max = 0;
      var user_div, user_p, user_h;
      var url = "https://randomuser.me/api/";
      var name1;
      var sum = 0;
      var all_users = [
        {
          name: "Nicer",

          money: Math.floor(Math.random() * 1000),
        },
        {
          name: "Jawad",
          money: Math.floor(Math.random() * 1000),
        },
        {
          name: "Najib",
          money: Math.floor(Math.random() * 1000),
        },
      ];

      async function gen(url) {
        var res = await fetch(url);
        var data = await res.json();
        name1 = data.results[0].name;
        var newUser = {
          name: `${name1.first} ${name1.last}`,
          money: Math.floor(Math.random() * 1000),
        };
        putData(newUser);
      }

      function putData(all) {
        all_users.push(all);
        user_permanent();
      }

      function element_creation() {
        user_div = document.createElement("div");
        user_h = document.createElement("h1");
        user_p = document.createElement("p");
      }

      function user_permanent() {
        users.innerHTML = "";
        all_users.forEach((item, index) => {
          element_creation();
          var price = Number(item.money);
          var money1 =
            "$" + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
          user_h.innerHTML = item.name;
          user_p.textContent = money1;
          user_div.appendChild(user_h);
          user_div.appendChild(user_p);
          user_div.classList.add("user");
          users.append(user_div);
        });
      }
      user_permanent();

      function add_user() {
        element_creation();
        gen(url);
      }

      function money_double() {
        all_users.map((item, index) => {
          item.money *= 2;
        });
        user_permanent();
      }

      function total_money() {
        all_users.map((item) => {
          sum += item.money;
        });
        var all_user = document.querySelectorAll(".user");
        var all_div = document.querySelectorAll("div");
        var users = document.querySelector(".users");
        var total_check = users.querySelector(".total_money");
        var money1 = "$" + sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        element_creation();
        user_h.innerHTML = "Total Money: ";
        user_p.textContent = money1;
        user_div.appendChild(user_h);
        user_div.appendChild(user_p);
        user_div.classList.add("total_money");
        users.append(user_div);

        if (total_check != null) {
          total.remove();
          user_p.textContent = "";
          user_p.textContent = sum;
        }
      }

      function sort_user() {
        var all_user = document.querySelectorAll(".user");
        all_users.sort((a, b) => {
          return b.money - a.money;
        });
        console.log(all_users);
        user_permanent();
      }

      var max = 0;
      var pos;

      function rich_user() {
        all_users.map((item, index) => {
          if (max <= item.money) {
            max = item.money;
            pos = index;
          }
        });
        element_creation();
        var all_user = document.querySelectorAll(".user");
        var all_div = document.querySelectorAll("div");
        var users = document.querySelector(".users");
        var rich_user = all_users[pos];
        users.innerHTML = "";
        var money1 =
          "$" +
          all_users[pos].money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

        user_p.textContent = money1;
        user_h.innerHTML = all_users[pos].name;
        user_div.appendChild(user_h);
        user_div.appendChild(user_p);
        user_div.classList.add("user");
        users.append(user_div);
        all_users = [];
        console.log(all_users);
        all_users.push(rich_user);
        console.log(all_users);
      }