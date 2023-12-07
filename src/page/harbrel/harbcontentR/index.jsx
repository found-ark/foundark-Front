import { useSearchParams } from "react-router-dom";
import HarbController from "./controller";
import HarbMap from "./map";
import { useState } from "react";

const blueScenario = [
  "파메 11 12",
  "파메 11 11 6",
  "파메 5 5 7 7",
  // "노메 12",
  "파메 11 11 6",
  // "찬미",
  "파메 7 7 12 1",
  // "노메 6",
  "파메 12 1 3",
  "파메 11 11 7 7",
  "파메 6 6 5",
  "파메 1 1 11 11",
  // "노메 12",
];
export default function Harbcontent() {
  const [mapBox, setMapBox] = useState({});
  const [panelBox, setPanelBox] = useState({});
  const [infoBox, setInfoBox] = useState({});
  const [timerBox, setTimerBox] = useState({});

  const [blueCount, setBlueCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);

  function addBlueCount(count) {
    setBlueCount((prv) => prv + count);
  }
  function addYellowCount(count) {
    setYellowCount((prv) => prv + count);
  }

  //노랑 메테오
  // let yellowCount = 0
  // let blueCount = 0
  function yellowMeteoButton() {
    if (yellowCount === 4) {
      return false;
    }
    //총 4번 사용
    if (yellowCount % 2 === 0) {
      //아래
      if (yellowCount === 0) {
        atack([6, 5, 7, 0], 3, mapBox);
        atack([9, 11, 12, 1, 1], 1, mapBox);
        timerBox["timeSet"](65);
      } else {
        atack([6, 5, 7, 0], 3, mapBox);
        timerBox["timeReSet"](20);
      }
    } else {
      //위
      atack([12, 1, 11, 0], 3, mapBox);
      timerBox["timeReSet"](20);
    }
    // yellowCount+=1
    addYellowCount(1);
    checkAndWrite(mapBox, infoBox, timerBox);
    if (yellowCount === 4) {
      return false;
    }
    return true;
  }

  //파랑 메테오 위치 다시 확인
  function blueMeteoButton() {
    // checkMap(mapBox,timerBox,yellowCount,blueCount)
    checkAndWrite(mapBox, infoBox, timerBox);
    return true;
  }

  //파랑 메테오 시간 리셋
  function blueMeteoResetButton() {
    timerBox["timeReSet"](0);
    // checkMap(mapBox,timerBox,yellowCount,blueCount)
    checkAndWrite(mapBox, infoBox, timerBox);
    return true;
  }

  //찬미(-10)
  function praiseButton() {
    timerBox["timeReSet"](10);
    checkAndWrite(mapBox, infoBox, timerBox);
    return false;
  }

  //몽환(-20)
  function dreamButton() {
    timerBox["timeReSet"](20);
    checkAndWrite(mapBox, infoBox, timerBox);
    return false;
  }
  //----------------------로직

  /**
   *
   * @param {*} mapBox 맵의 정보
   * @param {*} timerBox 다음 파메 시간정보
   * @param {*} count 노랑 메테오, 파랑 메테오 확인용
   */
  function checkMap(mapBox, timerBox) {
    //중앙은 아예 안쓰는 방식으로 진행
    //노랑메테오 짝수는 아래에 떨어질 예정, 홀수면 위에 떨어질 예정
    // console.log("-----------파랑 메테오 계산 시작");
    // console.log(`노랑 메테오 위치 : ${yellowCount % 2 === 0 ? "아래" : "위"}`);
    let blueNum = 0; //떨어지는 파란 메테오 갯수

    if (blueCount === 0) {
      blueNum = 2;
    } else {
      if (blueCount % 2 === 0) {
        blueNum = 4;
      } else {
        blueNum = 3;
      }
    }
    // console.log("떨어지는 파메 갯수", blueNum);
    //다음 파메나오는 시간
    let nextTime = timerBox["timeCheck"]();
    //지금 남은 파메들, [부서진여부,체력or복구시간,위치]
    let tileCur = [12, 1, 3, 5, 6, 7, 9, 11, 0].map((ele) => {
      return [...mapBox[ele](-1), ele];
    });
    if (nextTime < 5) {
      //오차 범위
      nextTime = 60;
    }
    // console.log("부서진여부,체력,위치", tileCur);
    // console.log("다음 파메 시간", nextTime);

    // 다음 파메시간 이전에 복구되는 타일, 아직 체력이 있는 타일 확인
    //[위치,체력]
    let tileCur2 = {};
    tileCur.forEach((ele) => {
      if (ele[0]) {
        //안부서짐
        if (ele[2] === 0) {
          //중앙은 3의 나머지를 체력으로 한다.
          tileCur2[ele[2]] = ele[1] % 3;
        } else {
          tileCur2[ele[2]] = ele[1];
        }
      } else {
        if (ele[1] < nextTime) {
          //다음 파메 떨어지기 이전에 나오는 경우
          tileCur2[ele[2]] = 3;
        }
      }
    });
    // console.log("위치,체력", tileCur2);
    //최대한 안부서지는 파란 메테오 지정

    //3번과 9번은 제외 체력 2이상인거 확인
    //떨어지는 파랑 메테오보다 많으면 체력이 많은 순으로 지정
    //부족할시
    //3번과 9번중 체력 많은 순으로 지정
    //그래도 부족할시
    //중앙 사용
    //그래도 부족할시
    //하나 부수는 방향으로 안내

    // 체력이 2이상인 타일 확인
    let availCheck = {};
    for (let c in tileCur2) {
      if (c === "0") {
        if (tileCur2[c] % 3 === 2) {
          availCheck[c] = 2;
        }
      } else {
        if (tileCur2[c] >= 2) {
          availCheck[c] = tileCur2[c];
        }
      }
    }
    // console.log("체력 2이상인 타일들");
    // console.log(availCheck);

    let allHP = 0; //전체 체력 합 = 안깨트리고 타일에 놓을 수 있는 파메 갯수
    for (let i in availCheck) {
      allHP += availCheck[i] - 1;
    }
    // console.log("전체 체력:", allHP);

    let noBrokenList = [];
    let brokenList = [];
    if (allHP >= blueNum) {
      // console.log("안부수게 놓겠습니다.");
      noBrokenTile(noBrokenList, blueNum, JSON.parse(JSON.stringify(availCheck)));
    }
    BrokenTile(brokenList, blueNum, JSON.parse(JSON.stringify(tileCur2)));

    //정렬 진행
    noBrokenList.sort((a, b) => a - b);
    brokenList.sort((a, b) => a - b);

    // console.log("안부스는 리스트");
    // console.log(noBrokenList);
    // console.log("부스는 리스트");
    // console.log(brokenList);
    return [noBrokenList, brokenList];
  }

  function noBrokenTile(blueList, blueNum, availCheck) {
    // console.log("------------안 뿌셔뿌셔 시작");
    // 안깨지게 깔기
    // 다음 노메 위치 방향부터 놓는다.
    // 노메번호 홀수(위)
    // 12 11 1
    // 노메번호 짝수(아래)
    // 6 5 7
    let under = [5, 7, 6];
    let upper = [11, 1, 12];
    let spare = [3, 9];
    if (yellowCount % 2 === 0) {
      //아래
      //5 7 6 순서대로 2이상이면 사용
      blueNum = blueCheck(under, blueNum, blueList, availCheck);
      if (blueNum > 0) {
        blueNum = blueCheck(upper, blueNum, blueList, availCheck);
      }
      if (blueNum > 0) {
        blueNum = blueCheck(spare, blueNum, blueList, availCheck);
      }
      if (blueNum > 0) {
        blueNum = blueCheck([0], blueNum, blueList, availCheck);
      }
    } else {
      //11 1 12 순서대로 2이상이면 사용
      blueNum = blueCheck(upper, blueNum, blueList, availCheck);
      if (blueNum > 0) {
        blueNum = blueCheck(under, blueNum, blueList, availCheck);
      }
      if (blueNum > 0) {
        blueNum = blueCheck(spare, blueNum, blueList, availCheck);
      }
      if (blueNum > 0) {
        blueNum = blueCheck([0], blueNum, blueList, availCheck);
      }
    }
    return blueList;
  }
  function BrokenTile(blueList, blueNum, tileCur) {
    // 노랑 메테오 위치 확인후 11시 or 7시 부수는 방향으로 메테오 지정
    //짝수인경우(아래에 놓을 예정임)
    //홀수인경우(위에 놓을 예정임)
    //부숴야 하는지 않부숴도 되는지 확인
    // 3방향(11,12,1/ 5,6,7)의 체력 확인
    // 파랑메테오 갯수 확인(3개 또는 4개)
    // (체력의 합 - 3)>= 파메 갯수
    // true면 굳이 안부숴도 됨.
    // false이면 부수기 진행 (체력의합-3)<파메갯수 => 체력의합 < 6or7인 경우뿐
    // 부수는것은 7또는5(11or1) 체력을 보고 판단한다.
    // 모든 경우확인 왼쪽과 오른쪽은 대칭이므로 중복으로 생각
    // 1 1 1 - 둘중 하나 부수기
    // 1 1 2 - 1인쪽 부수기
    // 1 1 3 - 1인쪽 부수기
    // 1 2 1 - 둘중 하나 부시기
    // 1 2 2 - 1인쪽 부수기
    // 1 2 3 - (4일때)1인쪽 부수기
    // 1 3 1 - 둘중 하나 부수기
    // 1 3 2 - (4일때)1인쪽 부수기
    // 2 1 2 - 둘중 하나 부수기
    // 2 1 3 - (4일때)2인쪽 부수기
    // 2 2 2 - (4일때) 둘중 하나 부수기

    // 규칙
    // 왼쪽과 오른쪽 둘중 1이 있으면 우선적으로 부수고 남은 체력에 맞게 메테오 넣기
    // 둘다 1이면 둘중 하나 부순다.
    // 둘다 2이면 둘중 하나 부순다.
    // 둘다 2이상일때 낮은쪽을 부순다.
    //한개는 뿌셔야됨
    // 규칙
    // 3방향(11,12,1/ 5,6,7)의 체력 확인
    // 파랑메테오 갯수 확인(3개 또는 4개)
    // (체력의 합 - 3)>= 파메 갯수
    // 왼쪽과 오른쪽 둘중 1이 있으면 우선적으로 부수고 남은 체력에 맞게 메테오 넣기
    // 둘다 1이면 둘중 하나 부순다.
    // 둘다 2이면 둘중 하나 부순다.
    // 둘다 2이상일때 낮은쪽을 부순다.
    let left = 0;
    let right = 0;
    let middle = 0;
    if (yellowCount % 2 === 0) {
      left = 5;
      right = 7;
      middle = 6;
    } else {
      left = 11;
      right = 1;
      middle = 12;
    }
    let under = [5, 7, 6];
    let upper = [11, 1, 12];
    let spare = [3, 9];

    if (
      tileCur[left] !== undefined &&
      tileCur[right] !== undefined &&
      tileCur[middle] !== undefined
    ) {
      //아래가 하나라도 깨지면 안됨
      //아래의 체력 확인
      let HPcheck = 0; //전체 체력 합 = 안깨트리고 타일에 놓을 수 있는 파메 갯수

      HPcheck += tileCur[left] - 1;
      HPcheck += tileCur[right] - 1;
      HPcheck += tileCur[middle] - 1;

      if (HPcheck < blueNum) {
        //남은 체력이 떨어뜨릴 메테오보다 낮음
        //부수기 진행
        if (tileCur[left] === 1) {
          blueList.push(left);
          blueList.push(left);
          tileCur[left] -= 2;
        } else if (tileCur[right] === 1) {
          blueList.push(right);
          blueList.push(right);
          tileCur[right] -= 2;
        } else if (tileCur[left] === 2) {
          blueList.push(left);
          blueList.push(left);
          tileCur[left] -= 2;
        } else if (tileCur[right] === 2) {
          blueList.push(right);
          blueList.push(right);
          tileCur[right] -= 2;
        }
        blueNum -= 2;

        //남은거 해결
        if (yellowCount % 2 === 0) {
          //아래
          if (blueNum > 0) {
            blueNum = blueCheck(under, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck(upper, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck(spare, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck([0], blueNum, blueList, tileCur);
          }
        } else {
          //위
          if (blueNum > 0) {
            blueNum = blueCheck(upper, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck(under, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck(spare, blueNum, blueList, tileCur);
          }
          if (blueNum > 0) {
            blueNum = blueCheck([0], blueNum, blueList, tileCur);
          }
        }
      }
    }

    return blueList;
  }

  /**
   * 타일 번호가 있을때, 해당 타일이 안까지도록 체력이 1이상이 되도록 놓는 방식 찾기
   *
   * @param {*} tilelist 타일 리스트
   * @param {*} blueNum 떨어지는 파메 갯수
   * @param {*} blueList 파메 부수는 순서
   * @param {*} availCheck 타일 체력
   */
  function blueCheck(tilelist, blueNum, blueList, availCheck) {
    let onMoreTile = [];
    if (blueNum === 0) {
      return 0;
    }
    tilelist.forEach((ele) => {
      if (blueNum > 0) {
        if (availCheck[ele] > 1) {
          availCheck[ele] -= 1;
          blueList.push(ele);
          blueNum -= 1;
          if (availCheck[ele] == 2) {
            onMoreTile.push(ele);
          }
        }
      }
    });
    if (blueNum > 0 && onMoreTile.length > 0) {
      blueNum = blueCheck(onMoreTile, blueNum, blueList, availCheck);
    }

    return blueNum;
  }

  function writeText(writeBox, list, action) {
    // console.log(writeBox);
    writeBox(list, action);
  }

  function checkAndWrite(mapBox, infoBox, timerBox) {
    //무한 루프 발생
    let [noBrokenList, brokenList] = checkMap(mapBox, timerBox);

    //현상태
    //writeText가 계속 써짐
    //노랑메테오 로직 수정
    //타이머가 지멋대로
    // writeText(infoBox["blueWrite1"], noBrokenList, () => {
    //   atack(noBrokenList, 1, mapBox);
    //   addBlueCount(1);
    //   checkAndWrite(mapBox, infoBox, timerBox);
    // });
    // writeText(infoBox["blueWrite2"], brokenList, () => {
    //   atack(brokenList, 1, mapBox);
    //   addBlueCount(1);
    //   checkAndWrite(mapBox, infoBox, timerBox);
    // });
  }

  /**
   * 공격
   * @param {list} ids 타일 번호 list
   * @param {int} dmg 데미지
   * @param {*} mapBox 맵 정보
   */
  function atack(ids, dmg, mapBox) {
    ids.map((id) => {
      mapBox[id](dmg);
    });
  }

  return (
    <div className="harb">
      <div className="harbCount"></div>
      <HarbController
        setPanelBox={setPanelBox}
        setInfoBox={setInfoBox}
        setTimerBox={setTimerBox}
        yellowButtonAction={yellowMeteoButton}
        blueButtonAction={blueMeteoButton}
        blueResetButtonAction={blueMeteoResetButton}
        praiseButtonAction={praiseButton}
        dreamButtonAction={dreamButton}
      />
      <HarbMap setMapBox={setMapBox} />
    </div>
  );
}
