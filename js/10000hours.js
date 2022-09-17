// js file

// 전역 변수 선언
const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("modal-wrap");
const modalOpenBtn = document.getElementById("modal-open-btn");
const modalCloseBtn = document.querySelector("close-btn");
const loadingSection = document.querySelector(".section-loading");
const resultSection = document.querySelector(".section-result");

// 인풋창 입력 후 클릭이벤트 시 예외처리 및 애니메이션, 결과 함수
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //폼 선택
  const formSelect = document.forms[0];
  // 폼 밸류값 변수 할당
  let job = formSelect.job.value;
  let time = formSelect.time.value;
  // 작성된 시간 타입 number로 변경
  let timeConverted = parseInt(time);
  // 작성한 인풋값이 들어갈 DOM요소
  let resultJob = document.getElementById("job");
  let resultTime = document.getElementById("time");
  let day = 0;

  if (!job || !time) {
    alert("내용을 입력해주세요.");
  } else if (!timeConverted) {
    alert("시간에 숫자를 입력해주세요.");
  } else if (timeConverted > 24) {
    alert("24 이하의 숫자를 입력해주세요.");
  } else {
    resultJob.innerText = job;
    for (let i = timeConverted; i <= 10000; i += timeConverted) {
      if (i <= 10000) {
        day++;
      } else {
        return day;
      }
    }
    resultTime.innerText = day;

    loadingSection.style.display = "block";
    resultSection.style.display = "none";
    setTimeout(() => {
      loadingTimeout();
    }, 2000);
  }
});

// 모달 창 open (active class 추가)
modalOpenBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("active");
});

// 모달 창 close (active class 제거)
const modalClose = () => {
  modal.classList.remove("active");
};

// 로딩 함수
const loadingTimeout = () => {
  loadingSection.style.display = "none";
  resultSection.style.display = "block";
};
