const quizData = [
    {
        question: "İtalya'nın başkenti neresidir?",
        choices: ["Roma", "Paris", "Atina", "Berlin"],
        correct: "Roma"
    },
    {
        question: "Afganistan'ın başkenti neresidir?",
        choices: ["Kabil", "Tahran", "Bağdat", "Ankara"],
        correct: "Kabil"
    },
    {
        question: "Arnavutluk'un başkenti neresidir?",
        choices: ["Belgrad", "Zagreb", "Tiran", "Atina"],
        correct: "Tiran"
    },
    {
        question: "Almanya'nın başkenti neresidir?",
        choices: ["Berlin", "Stuttgart", "Kopenhag", "Hamburg"],
        correct: "Berlin"
    },
    {
        question: "No Suprises, Creep, Karma Police şarkıları hangi gruba aittir?",
        choices: ["Radiohead", "Manowar", "Guns n' Roses", "Led Zeppelin"],
        correct: "Radiohead"
    },
    {
        question: "Cengiz Han'ın hangi oğlu kendisinden önce ölmüştür?",
        choices: ["Cuci Han", "Çağatay Han", "Tuluy Han", "Ogeday Han"],
        correct: "Cuci Han"
    },
    {
        question: "Libertadores Kupası'nı en çok kazanan, 1969 yılında Neil Armstrong'un Ay'a giderken flamasını götürdüğü futbol takımı hangisidir?",
        choices: ["Independiente", "Palmeiras", "Boca Juniors", "River Plate"],
        correct: "Independiente"
    },
    {
        question: "1970 yılında Mısır Cumhurbaşkanı'nın cenazesinde üzüntüsünden iki kere baygınlık geçiren lider kimdir?",
        choices: ["Muammer Kaddafi", "Saddam Hüseyin", "Yaser Arafat", "Hafız Esad"],
        correct: "Muammer Kaddafi"
    },
    {
        question: "Kolombiya'nın başkenti neresidir?",
        choices: ["Bogota", "Cali", "Medellin", "Caracas"],
        correct: "Bogota"
    },
    {
        question: "Şili'nin başkenti neresidir?",
        choices: ["Santiago", "Buenos Aires", "Lima", "Havana"],
        correct: "Santiago"
    },
    {
        question: "Somali'nin başkenti neresidir?",
        choices: ["Mogadişu", "Bağdat", "Addis Ababa", "Kahire"],
        correct: "Mogadişu"
    },
    {
        question: "Suriye'nin başkenti neresidir?",
        choices: ["Şam", "Bağdat", "Halep", "İsfahan"],
        correct: "Şam"
    },
    {
        question: "İran'ın başkenti neresidir?",
        choices: ["Tahran", "Bağdat", "İsfahan", "Tebriz"],
        correct: "Tahran"
    },
    {
        question: "Tayland'ın başkenti neresidir?",
        choices: ["Bangkok", "Manila", "Jakarta", "Havana"],
        correct: "Bangkok"
    },
    {
        question: "Rusya'nın başkenti neresidir?",
        choices: ["Moskova", "Minsk", "Kiev", "Tiflis"],
        correct: "Moskova"
    },
    {
        question: "Gürcistan'ın başkenti neresidir?",
        choices: ["Tiflis", "Tel Aviv", "Moskova", "Batum"],
        correct: "Tiflis"
    },
    {
        question: "Hindistan'ın başkenti neresidir?",
        choices: ["Yeni Delhi", "Kalküta", "Agra", "Tiflis"],
        correct: "Yeni Delhi"
    },
    {
        question: "Hangi savaş Osmanlılar döneminde gerçekleşmemiştir?",
        choices: ["Miryokefalon", "Otlukbeli", "Sırpsındığı", "Çaldıran"],
        correct: "Miryokefalon"
    },
    {
        question: "Fransa'nın Napolyon isminde kaç imparatoru vardır?",
        choices: ["Bir", "İki", "Üç", "Dört"],
        correct: "İki"
    },
    {
        question: "Hangisi suikast sonucu hayatını kaybetmemiştir?",
        choices: ["Hugo Chavez", "Mahatma Gandhi", "Abraham Lincoln", "Troçki"],
        correct: "Hugo Chavez"
    },
    {
        question: "Josie Rizal hangi ülkenin ulusal kahramanıdır?",
        choices: ["Filipinler", "Peru", "Hindistan", "Myanmar"],
        correct: "Filipinler"
    },
    {
        question: "Turgut Uyar, Edip Cansever ve Cemal Süreya hangi kadın yazar için aşk şiiri yazmışlardır?",
        choices: ["Tomris Uyar", "Füruzan", "Gülten Akın", "Leyla Erbil"],
        correct: "Tomris Uyar"
    },
    {
        question: "Çizgi film karakteri Woody hangi kuş türündendir?",
        choices: ["Ağaçkakan", "Karga", "Tavus Kuşu", "Penguen"],
        correct: "Ağaçkakan"
    },
    {
        question: "Hangisi Batman'in düşmanı değildir?",
        choices: ["Dr. Doom", "Joker", "Poison Ivy", "Bane"],
        correct: "Dr. Doom"
    },
    {
        question: "Hangisi Marvel evreninden değildir?",
        choices: ["Zatanna", "Silver Surfer", "Hulk", "Kingpin"],
        correct: "Zatanna"
    },
    {
        question: "Hangisi DC evreninden değildir?",
        choices: ["Apocalypse", "Lex Luthor", "Aquaman", "Superman"],
        correct: "Apocalypse"
    },
    {
        question: "Çok sevilen Deadpool karakterinin DC evrenindeki versiyonu kimdir?",
        choices: ["Death Stroke", "Jessy J", "Killer X", "Mugman"],
        correct: "Death Stroke"
    },
    {
        question: "DC yazarları çok sevilen Hulk karakterine alternatif olarak 1973 yılında hangi karakteri yaratmışlardır?",
        choices: ["Solomon Grundy", "Adam Skundy", "Ted Bundy", "Steven Murphy"],
        correct: "Solomon Grundy"
    },
    {
        question: "Hangi şair toplumcu gerçekçilik akımında eser vermemiştir?",
        choices: ["İlhan Berk", "Ahmet Arif", "Hasan Hüseyin Korkmazgil", "Rıfat Ilgaz"],
        correct: "İlhan Berk"
    },
    {
        question: "Hangi filozof aşkı ciddi bir akıl hastalığı olarak tanımlamıştır?",
        choices: ["Platon", "Nietzsche", "Hegel", "Comte"],
        correct: "Platon"
    },
    {
        question: "Kükürtün simgesi hangisidir?",
        choices: ["S", "Li", "K", "He"],
        correct: "S"
    },
    {
        question: "Hangisi Cumhurbaşkanlığı yapmamıştır?",
        choices: ["Adnan Menderes", "Süleyman Demirel", "Turgut Özal", "Kenan Evren"],
        correct: "Adnan Menderes"
    },
    {
        question: "Kösem Sultan hangi Osmanlı Padişahı'nın eşidir?",
        choices: ["1. Ahmed", "2. Mahmut", "3. Murat", "2. Süleyman"],
        correct: "1. Ahmed"
    },
    {
        question: "İsrail'i ilk tanıyan Müslüman ülke hangisidir?",
        choices: ["Türkiye", "Malezya", "Katar", "Mısır"],
        correct: "Türkiye"
    },
    {
        question: "Süt Kardeşler filmi hangi yazarın Gulyabani adlı kitabından esinlenilerek çekilmiştir?",
        choices: ["Hüseyin Rahmi Gürpınar","Muallim Naci","Ömer Seyfettin","Aziz Nesin"],
        correct: "Hüseyin Rahmi Gürpınar"
    },
    {
        question: "Dünya kupasında en çok gol atmış futbolcu hangisidir?",
        choices: ["Miroslav Klose", "Ronaldo Nazario", "Lionel Messi", "Pele"],
        correct: "Miroslav Klose"
    },
    {
        question: "Hangisi milattan önce yaşamamıştır?",
        choices: ["Caligula", "Kleopatra", "Cicero", "Jül Sezar"],
        correct: "Caligula"
    },
    {
        question: "Hababam Sınıfı karakteri Kel Mahmut ne öğretmenidir?",
        choices: ["Tarih", "Coğrafya", "Matematik", "Fizik"],
        correct: "Tarih"
    },
    {
        question: "Boulevard of Broken Dreams, Holiday, 21 Guns şarkılarının sahibi rock grubu hangisidir?",
        choices: ["Green Day", "Metallica", "Rolling Stones", "Sublime"],
        correct: "Green Day"
    },
    {
        question: "Rapçi Tupac, sahne adını seçerken hangi ülkenin ulusal kahramanından esinlenmiştir?",
        choices: ["Peru", "Meksika", "Japonya", "Brezilya"],
        correct: "Peru"
    },
    {
        question: "Hümeyra'nın seslendirdiği Sessiz Gemi şarkısının sözleri hangi şaire aittir?",
        choices: ["Yahya Kemal Beyatlı", "Orhan Veli", "Edip Cansever", "Cahit Sıtkı Tarancı"],
        correct: "Yahya Kemal Beyatlı"
    },
    {
        question: "İnebahtı Savaşı'nda Osmanlılara esir düşen yazar hangisidir?",
        choices: ["Cervantes", "Dante", "Umberto Eco", "Jorge Biscaray"],
        correct: "Cervantes"
    },
    {
        question: "Kasırga, Yeşil Papa ve Gözleri Açık Gidenler kitaplarından oluşan Muz Üçlemesi'nin yazarı kimdir?",
        choices: ["Miguel Angel Asturias", "Eduardo Galeano", "Gabriel Garcia Marquez", "Isabel Allende"],
        correct: "Miguel Angel Asturias"
    },
    {
        question: "2017 yılında intihar eden Chester Bennington hangi rock grubunun solistiydi?",
        choices: ["Linkin Park", "Sunset Boys", "Rammstein", "Stonecold"],
        correct: "Linkin Park"
    },
    {
        question: "Hangisi etçil bir dinozor değildir?",
        choices: ["Triceratops", "Spinosaurus", "Megalosaurus", "T. rex"],
        correct: "Triceratops"
    },
    {
        question: "Zırnık hangi elementtir?",
        choices: ["Arsenik", "Cıva", "Altın", "Oksijen"],
        correct: "Arsenik"
    },
    {
        question: "No Woman No Cry şarkısıyla bilinen Jamaikalı reggae sanatçısı kimdir?",
        choices: ["Bob Marley", "Dr. Dre", "Jimi Hendrix", "Kurt Cobain"],
        correct: "Bob Marley"
    },
    {
        question: "Martı, Vanya Dayı, Vişne Bahçesi gibi eserleriyle bilinen Rus yazar kimdir?",
        choices: ["Çehov", "Dostoyevski", "Tolstoy", "Gorki"],
        correct: "Çehov"
    },
    {
        question: "Tosun Paşa filminde Seferoğulları ve Tellioğulları neresi için mücadele etmektedir?",
        choices: ["Yeşil Vadi", "Şirin Köy", "Sulak Ova", "Huzurlu Gölet"],
        correct: "Yeşil Vadi"
    },
    {
        question: "1999 yılında vizyona giren Fight Club filmine ilham veren aynı adlı kitabın yazarı kimdir?",
        choices: ["Chuck Palahniuk", "Bruce Scales", "Kurt Vonnegut", "Ursula K. Le Guin"],
        correct: "Chuck Palahniuk"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="choice" value="${choice}"> ${choice}`;
        choicesEl.appendChild(li);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const answer = selectedChoice.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            score+=10;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Lütfen bir seçim yapın.");
    }
}

function showResult() {
    questionEl.textContent = "Quiz Bitti!";
    choicesEl.innerHTML = "";
    submitBtn.style.display = "none";
    resultEl.innerHTML = `Sonuç: ${score} / ${(quizData.length)*10}`;
}

submitBtn.addEventListener("click", checkAnswer);

// İlk soruyu yükle
loadQuestion();
