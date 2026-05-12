// App.jsx
function App() {
  return (
    <div>
      //ProfileCard가 컴포넌트
      //컴포넌트를 만드는 것은 태그를 만드는 것. 태그를 만드는 것은 함수
      //props는 이름, 나이, 직업, 아바타
      <ProfileCard 
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard 
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

// 여기에 ProfileCard 컴포넌트를 만드세요!
function ProfileCard(props) {
    return (
        <div className="profile-card">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.job}</h2>
            <img src={props.avatar} alt={`${props.name}'s avatar`}/>
        </div>
    );
  // 구현하기

}
export default ProfileCard;