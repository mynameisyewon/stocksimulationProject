const accessToken = localStorage.getItem('accessToken');
const serverUrl = "http://121.158.132.54:18646/userInfo/Id_NickName_Balance";
//URL이 "http://" 또는 "https://"로 시작하지 않으면 "http://"를 추가
if (!serverUrl.startsWith("http://")) {
    serverUrl = "http://" + serverUrl;
}

fetch(serverUrl, { 
    method: 'GET',
    headers: {
            'Authorization': "Bearer "+localStorage.getItem('accessToken')
    }
})
.then(response => response.json())
.then(data => {
    
    document.getElementById("homeNickname").textContent = data.nickname;
    document.getElementById("homeNickname2").textContent = data.nickname;
    document.getElementById("homeAccount").textContent = data.account;
    document.getElementById("homeBalance").textContent = data.balance;
    localStorage.setItem('accountNumber', data.account);

})
.catch(error => {
    console.error('회원정보 요청 중 오류 발생:', error);
});

function refreshPage() {
    window.location.href = "https://capstone-0chateam.github.io/stocksimulation/mainSuccess.html"
}

