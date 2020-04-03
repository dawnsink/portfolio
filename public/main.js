
// var signSchema = new mongoose.Schema({
//     name: String,
//     color: String,
// });

// var Sign = mongoose.model('Sign', signSchema);

// Sign.find(function (err, signs) {
//     if (err) return console.error(err);
//     console.log(signs);
// })

//define class of signs, as pulled from API

class Signs {
    constructor() {
      this.baseurl = '/api/v1/signs';
      this.signs = [];
      this.$signs = document.querySelector('.color-post');
      this.$form = document.getElementById('astrologyform');
      this.$button = document.getElementById('submit');
      this.$input = document.getElementById('zodiac');

      console.log(this.$button);
      
      this.$button.addEventListener('click', evt => {
        //    evt.preventDefault();
        //   await this.createColor();
          //console.log(this.$input.value);

          var input = this.$input.value.trim().toLowerCase();
          // var go = document.getElementById("zodiac");
          // var txt = document.getElementById("submit");
          //   txt.addEventListener("keypress", function(event) {
          //         event.preventDefault();
          //       if (event.keyCode == 13)
          //       go.click();
          //     });

          for (var index = 0; index < 13; index = index + 1){
              if (this.signs[index].name == input){
                document.getElementById('background').style['background-color'] = this.signs[index].color;
                break;
              }
              else {
                document.getElementById('background').style['background-color'] = this.signs[12].color
              }
          }

        });
    }
    async init() {
        this.signs = await this.getSigns();
        await this.updateColor();
    }
    
    //GET colors
    async getSigns() {
         let data = await fetch(this.baseurl);
        data = await data.json();
        console.log(data);
        
        this.signs = data;
        await this.renderSigns();
    }

    //THIS PART adapt from to do list code, it currently config to post the 'todo item' to site- instead, input of Zodiac sign should change the website background color
    renderSigns() {
        this.$signs.innerHTML = '';
        this.signs.forEach(item => {
          this.$signs.innerHTML += `
          `;
        });
    
        // // add listener to delete
        // document.querySelectorAll('.sign-item').forEach(item => {
        //   item.addEventListener('click', this.handleEditOrDelete.bind(this));
        // });
      }
    }
    
    window.addEventListener('DOMContentLoaded', async () => {
      const signs = new Signs();
      await signs.init();
    });


