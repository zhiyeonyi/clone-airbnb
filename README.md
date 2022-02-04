# 1. 프로젝트 개요

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1) 프로젝트 주제

Airbnb 클론코딩 : http://zhiyeonyi.shop.s3-website.ap-northeast-2.amazonaws.com/

## 2) 팀원소개🧙‍♂️

### 5인 1조 팀프로젝트 (백엔드: 3명, 프론트엔드: 2명)

### [BACK-END]
🧑🏻‍💻 김희경

🧑🏻‍💻 김태우

🧑🏻‍💻 배은지

### [FRONT-END]
🧑🏻‍💻 우민기

🧑🏻‍💻 이지연

# 2. 개발환경

<img src="https://camo.githubusercontent.com/d147c6135f0f61373ceeae9035902f4c70578cb7bebacbf9a629bbfa0c035b0c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"/>
<img src="https://camo.githubusercontent.com/d7a20725f534274737c2e8ea95bd345a2f09c31f22910de188b3151aad65b45d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d626c61636b"/>
<img src="https://camo.githubusercontent.com/751649218286418c3b3a04b2fe4fe5929358a1b761108b26b5e29e8bb202f2d6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c2d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"/>
<img src="https://camo.githubusercontent.com/d1a61dccdba51c4d1ff3306fe00404de9162915d282bade8ef91b992f84ebd35/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6373732d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"/>
<img src="https://camo.githubusercontent.com/d7ade26e4f293e0cb858d1201598c2d5796337157046744f785c292de15fc774/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6177732d3233324633453f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e415753266c6f676f436f6c6f723d7768697465"/>
<img src="https://camo.githubusercontent.com/5148c757ec30584083d0dc8c25ee75363e4bc37a55889b989e864549f6b08132/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d3138313731373f7374796c653d666c6174266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"/>
<img src="https://camo.githubusercontent.com/770f4d88e664a125e7d37ae6454a96da68e906c830eef44caeb59f0e56c2d8cf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d4630353033323f7374796c653d666c6174266c6f676f3d676974266c6f676f436f6c6f723d7768697465"/>

# 3. 🎞 프로젝트 시연 영상 🎞

![Hnet-image](https://user-images.githubusercontent.com/92702096/145673393-0f6c5102-62c3-4946-b6f0-3bd9ed739bd4.gif)
<br/>

[시연영상 바로가기](http://ohyo.shop.s3-website.ap-northeast-2.amazonaws.com)

[홈페이지 바로가기](http://ohyo.shop.s3-website.ap-northeast-2.amazonaws.com)

[와이어프레임](https://ovenapp.io/project/yBmVvSyjqJe0Nsgq1Vi0ZbalbHAH23MP#n3kas)
</br>
</br>
</br>

## ⚙ 주요 기능 ⚙

🤍**로그인/회원가입**

- 아이디 중복확인 기능
- 회원가입시 아이디, Email, 비밀번호 유효성 검사
  </br>

🧡**메인페이지**

- 로그인한 유저이름 출력
- 게시글 목록 출력
  - 키워드 클릭 시 해당 카테고리의 출력
  - 카드별 이미지, Title, 작성자, 조회수 표시
- 카테고리 별 게시글 출력(필터)
  - 키워드 클릭 시 해당 카테고리의 출력
- 상세페이지 이동
  - 카드 클릭 시 해당 상세페이지 이동
    </br>

💛**게시글 작성 페이지**

- 사진 업로드
- 빈칸 메세지
  </br>

💚**상세페이지**

- 게시글 상세내용 출력
- 댓글기능 - 로그인한 사용자만 댓글 작성가능
  </br>

💙**마이페이지**

- 로그인한 사용자의 게시물 확인 가능
  </br>
  </br>

## 📜 API TABLE

**회원가입**
| 기능 | Method | URL | Request | response |
| --- | --- | --- | --- | --- |
| 회원가입 | POST | /api/user/signup | {"username": "username", "password":"password", "passwordCheck":"password", "email": "email"} | 회원가입 성공시: Success Sign up |
| 아이디 중복확인 | POST | /api/user/checkid | {"username":"beomin123"} | 아이디 존재시: Existed Id, 아이디 없을시: You can use this Id |
| 이메일 중복확인 | POST | /api/user/checkemail | {"email":"email@naver.com"} | 이메일 존재시: Existed Email, 이메일 없을시: You can use this Email |

![image](https://user-images.githubusercontent.com/86363774/145669813-5e22eccd-eb4a-4c2d-a8cb-f561b9478f98.png)
![image](https://user-images.githubusercontent.com/86363774/145669824-218e9e81-6162-4a1c-b10a-566f0d6db688.png)
![image](https://user-images.githubusercontent.com/86363774/145669841-a2164ca2-5002-4a5b-b2bb-e8c29e77c7b3.png)

</br>
</br>

## 📖 팀노션

[팀노션 바로가기](https://www.notion.so/99-4-6-9-c2b95bdb4e4f40fc90a2a2294399013b)

</br>
</br>

## 느낀점

<p>다음주 망했다.</p>

          

          
