<template>
    <section style="display: flex; flex-direction: column; overflow-x: hidden; padding: 15px; align-content: center; justify-content: center; height: 100vh">
        <div style='text-align: center; margin-top: 10px; display: flex; justify-content: center'> 
            <p style="font-size: 30px">Выберите пару</p> <router-link to='/Main' class="btn btn-outline-secondary" style="margin-left: auto; position: absolute; right: 15px">Menu</router-link>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 30px; height: 700px;">
            <div class="HumanDiv" style="position: relative; width: 500px; height: 700px; box-shadow: 0px 0px 30px 5px gray; border-radius: 40px; transition: all 0.4s ease;">
                <img class="HumanImg" :src='ImgArray[HumanNumber]' style="width: 500px; height: 700px; border-radius: 40px;">
                <p style="z-index: 2; position: absolute; bottom: 25px; margin: 0px; color: white; font-size: 50px; left: 35px">{{ NameArray[HumanNumber] }} {{ AgeArray[HumanNumber] }}</p>
                <div style="position: absolute; border-radius: 40px; top: 0; z-index: 1; box-shadow: inset 0px -100px 100px 5px black; width: 500px; height: 700px;" class=""></div>
            </div>
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: center;">
            <button style="margin-right: 10px; border-radius: 100%; width: 100px; height: 100px; font-size: 45px" class="btn btn-outline-success likeButton">
                ♥
            </button>
            <button style="margin-left: 10px; border-radius: 100%; width: 100px; height: 100px; font-size: 30px" class="btn btn-outline-danger dislikeButton">
                ✕ 
            </button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    setup() {
        let likeClick = ref(null)
        let dislikeClick = ref(null)
        let ImgArray = ref([])
        let HumanNumber = ref()
        let NameArray = ref('')
        let AgeArray = ref('')
        let likeButton = ref(null)
        let dislikeButton = ref(null)
        let ImgDiv = ref('')

        onMounted(() => {            
            HumanNumber.value = 0
            ImgArray.value = ['src/assets/HumansPhotos/CoolGirl.jpg', 'src/assets/HumansPhotos/CoolBoy.jpg', 'src/assets/HumansPhotos/CoolMan.jpg'];
            NameArray.value = ['Валерия', 'Париж', 'Город)']
            likeButton.value = document.querySelector('.likeButton');
            dislikeButton.value = document.querySelector('.dislikeButton');
            ImgDiv.value = document.querySelector('.HumanDiv')
            AgeArray.value = ['23', '133', '50']

            likeClick.value = function likeClickFunc() {
                likeButton.value.removeEventListener('click', likeClick.value)
                dislikeButton.value.removeEventListener('click', dislikeClick.value) 
                ImgDiv.value.classList.add('likedImg')
                setTimeout(() => {  
                    HumanNumber.value++
                    setTimeout(() => {
                        ImgDiv.value.classList.remove('likedImg')
                        setTimeout(() => {
                            likeButton.value.addEventListener('click', likeClick.value)
                            dislikeButton.value.addEventListener('click', dislikeClick.value)
                        }, 500)
                    }, 100)
                }, 500)
            }   

            likeButton.value.addEventListener('click', likeClick.value);

            dislikeClick.value = function dislikeClickFunc() {
                likeButton.value.removeEventListener('click', likeClick.value)
                dislikeButton.value.removeEventListener('click', dislikeClick.value) 
                ImgDiv.value.classList.add('dislikedImg')
                setTimeout(() => {
                    HumanNumber.value++   
                    setTimeout(() => {
                        ImgDiv.value.classList.remove('dislikedImg')
                        setTimeout(() => {
                            dislikeButton.value.addEventListener('click', dislikeClick.value)
                            likeButton.value.addEventListener('click', likeClick.value)
                        }, 500)
                    }, 100)
                }, 600)
            }  

            dislikeButton.value.addEventListener('click', dislikeClick.value) 
        })
        return {
            likeClick,
            dislikeClick,
            ImgArray,
            NameArray,
            HumanNumber,
            AgeArray
        }        
    }
}
</script>

<style scoped>
.likedImg {
    transform: translateX(-1250px);
    opacity: 0;
}

.dislikedImg {
    transform: translateX(1250px);
    opacity: 0;
}
</style>