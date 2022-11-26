import {Job,mkJobmodal} from "./search/job"
import { mkEngModal,addEngButton } from "./search/engrave";
import { observ } from "./observ";
import {abilCheck} from "./option/ability"
import {receipeCheck} from "./option/receipe"
import { rangeSlider } from "./range";
import { initGaksderImg } from "../imageloader";

import { searchButton } from "./search/goSearch";

import { CrawlTime } from "./result/crawlTime";

export default class App {
  $target = null;
  Data = undefined;

  constructor($target) {
    this.$target = $target; //app이 들어옴
    this.Data = new observ()
  }
  render(){
    this.init()
    //시간 불러오기
    CrawlTime()
    //이미지 불러오기
    initGaksderImg()

    //모달 내용 생성
    mkJobmodal(this.Data)//직업
    mkEngModal(this.Data)//각인

    Job(this.Data)//메인화면 직업 선택 부분
    addEngButton()//각인 추가
    
    //옵션
    abilCheck()//어빌리티 체크 유무
    receipeCheck(this.Data)//각인서 체크

    //슬라이더 퍼센트
    rangeSlider()

    searchButton()
  }
  init(){
    let content = `<div class="search">
    <div class="job">
        
    </div>
    <div class="engraveWrap">
        <div class="engrave_list">
  
        </div>
        <div class="add_engrave">
            <div class="add_engrave_button plus_white">
  
            </div>
        </div>
    </div>
    
  
  </div>
  <div class="option">
    <div class="option_content">
        <div class="option_wrap">
            <div class="slide_wrap">
                <div class="tekseng">
                    <div class="tekseng_select_wrap">
                        <div class="select_form tekseng_select_form">
                            <select name="" id="" class="mainSelectAbil">
                                <option>---</option>
                                <option>치명</option>
                                <option>특화</option>
                                <option>신속</option>
                            </select>
                        </div>
                        <div class="select_form tekseng_select_form">
                            <select name="" id="" class="mainSelectAbil">
                                <option>---</option>
                                <option>치명</option>
                                <option>특화</option>
                                <option>신속</option>
                            </select>
                        </div>
                    </div>
                    <div class="slidecontainer">
                        <input type="range" min="0" max="100" value="50" step="25" class="slider" id="mainSliderAbilValue">
                        <span class="slider_value">50%</span>
                    </div>
                </div>
                <div class="price_wrap">
                    <div class="price_select_wrap">
                        <div class="low">
                            저가
                        </div>
                        <div class="mid">
                            효율
                        </div>
                        <div class="high">
                            사장님
                        </div>
                    </div>
                    <div class="slidecontainer">
                        <input type="range" min="0" max="100" value="50" class="slider" step="25" id="OptionPriceSliderValue">
                        <span class="slider_value">50%</span>
                    </div>
                </div>
            </div>
            
            <div class="abil_wrap">
                <div class="abil_check">
                    <input type="checkbox" class="abil_checkbox"name="abil_chk" value="abil">어빌리티 스톤 고정
                </div>
                <div class = "abil_show_content">
                    <div class="abil_list">
                        <div class="abil_hidden">
                            <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_21.png">
                        </div>
                        <div class="abil_engrave_wrap">
                            <div class="engrave">
                                <div class="engrave_img">
                                    <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Buff/Buff_71.png">
                                </div>
                                <span> 원한 </span>
                                <div class="engrave_point">
                                    <div class="down minus_black"></div>
                                    <div class="value">5</div>
                                    <div class="up plus_black"></div>
                                </div>
                            </div>
                            <div class="engrave">
                                <div class="engrave_img">
                                    <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Buff/Buff_113.png">
                                </div>
                                <span> 각성 </span>
                                <div class="engrave_point">
                                    <div class="down minus_black"></div>
                                    <div class="value">5</div>
                                    <div class="up plus_black"></div>
                                </div>
                            </div>
                            <div class="engrave">
                                <div class="engrave_img">
                                    <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_220.png">
                                </div>
                                <span> 공격속도 감소 </span>
                                <div class="engrave_point">
                                    <div class="down minus_black"></div>
                                    <div class="value">5</div>
                                    <div class="up plus_black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="receipe_wrap">
                <div class="receipe_check">
                    <input type="checkbox" class = "receipe_checkbox" name="receipe_chk" value="receipe">각인서 고정
                </div>
                <div class="receipe_show_content">
                    <div class="receipe_list">
                        <div class="receipe_hidden">
                            <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_24.png">
                        </div>
                        <div class="receipe_engrave_wrap">
                            <div class="engrave">
                                <div class="engrave_img">
                                    <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Buff/Buff_71.png">
                                </div>
                                <span> 원한 </span>
                                <div class="engrave_point">
                                    <div class="down minus_black"></div>
                                    <div class="value">9</div>
                                    <div class="up plus_black"></div>
                                </div>
                            </div>
                            <div class="engrave">
                                <div class="engrave_img">
                                    <img src = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Buff/Buff_113.png">
                                </div>
                                <span> 각성 </span>
                                <div class="engrave_point">
                                    <div class="down minus_black"></div>
                                    <div class="value">9</div>
                                    <div class="up plus_black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="search_start">
    <button class="search_button default_button">찾기</button>
  </div>
  <div class="result">
    <div class="update_time">
    </div>
    <div class="result_wrap">
    </div>
  </div>`
    let wrap = document.querySelector(".content")
    wrap.innerHTML = ''
    wrap.innerHTML = content
  }
  
}
