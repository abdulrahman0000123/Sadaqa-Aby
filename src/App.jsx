import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('tasbeeh');
  const [currentTasbeehIndex, setCurrentTasbeehIndex] = useState(0);
  const [counts, setCounts] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  // قائمة التسبيحات
  const tasbeehList = [
    { id: 'subhan', text: 'سُبْحَانَ اللَّهِ', target: 33 },
    { id: 'alhamdulillah', text: 'الْحَمْدُ لِلَّهِ', target: 33 },
    { id: 'la_ilaha', text: 'لَا إِلَهَ إِلَّا اللَّهُ', target: 33 },
    { id: 'allahu_akbar', text: 'اللَّهُ أَكْبَرُ', target: 33 },
    { id: 'istighfar', text: 'أَسْتَغْفِرُ اللَّهَ العَظِيمَ وَأَتُوبُ إِلَيْهِ', target: 100 },
    { id: 'salawat', text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', target: 10 },
    { id: 'hawqala', text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', target: 100 }
  ];

  // الأذكار
  const adhkarList = [
    {
      title: "آية الكرسي",
      content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
      count: 1
    },
    {
      title: "سيد الاستغفار",
      content: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
      count: 1
    },
    {
      title: "دعاء للمتوفي",
      content: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ القَبْرِ وَعَذَابِ النَّارِ.",
      count: 1
    },
    {
      title: "أذكار الصباح والمساء (مقتطف)",
      content: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. (٣ مرات)",
      count: 3
    }
  ];

  // عداد الوقت المنقضي منذ الوفاة
  useEffect(() => {
    const deathDate = new Date(2021, 1, 27, 0, 0, 0); // 27 فبراير 2021

    const updateCounter = () => {
      const now = new Date();

      let years = now.getFullYear() - deathDate.getFullYear();
      let months = now.getMonth() - deathDate.getMonth();
      let days = now.getDate() - deathDate.getDate();

      if (days < 0) {
        months--;
        const prevMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonthEnd.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeElapsed({
        years,
        months,
        days,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  // استرجاع العدادات من LocalStorage عند التحميل
  useEffect(() => {
    const savedCounts = localStorage.getItem('sadaqahCounts');
    const savedTotal = localStorage.getItem('sadaqahTotal');
    if (savedCounts) setCounts(JSON.parse(savedCounts));
    if (savedTotal) setTotalCount(parseInt(savedTotal, 10));
  }, []);

  // حفظ العدادات عند أي تغيير
  useEffect(() => {
    localStorage.setItem('sadaqahCounts', JSON.stringify(counts));
    localStorage.setItem('sadaqahTotal', totalCount.toString());
  }, [counts, totalCount]);

  const handleTasbeehClick = () => {
    const currentId = tasbeehList[currentTasbeehIndex].id;
    const currentCount = counts[currentId] || 0;
    
    setCounts({
      ...counts,
      [currentId]: currentCount + 1
    });
    setTotalCount(prev => prev + 1);

    // اهتزاز خفيف للهواتف عند الضغط
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const resetCurrentTasbeeh = () => {
    const currentId = tasbeehList[currentTasbeehIndex].id;
    setCounts({
      ...counts,
      [currentId]: 0
    });
  };

  const currentTasbeeh = tasbeehList[currentTasbeehIndex];
  const currentCount = counts[currentTasbeeh.id] || 0;

  return (
    <div dir="rtl" className="min-h-screen w-full relative font-sans selection:bg-amber-500 selection:text-white flex flex-col items-center justify-between overflow-x-hidden bg-black">
      {/* تضمين الخطوط الإسلامية من Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Aref+Ruqaa:wght@400;700&family=Cairo:wght@400;600;700&display=swap');
        
        @font-face {
          font-family: 'Fantezy';
          /* ensure font file resides in public/ so it's served correctly */
          src: url('/33-B-Fantezy.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-diwani {
          font-family: 'Aref Ruqaa', 'Amiri', serif;
        }
        .font-amiri {
          font-family: 'Amiri', serif;
        }
        .font-cairo {
          font-family: 'Cairo', sans-serif;
        }
        .font-fantezy {
          font-family: 'Fantezy', serif;
        }
        
        .glass-panel {
          background: rgba(15, 30, 20, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
      `}} />

      {/* صورة الخلفية */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-left md:bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundAttachment: 'fixed',
          backgroundColor: '#000'
        }}
      >
        {/* طبقة شفافة لجعل النص مقروءاً مع الحفاظ على وضوح الصورة */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-950/70 to-black/90 z-0"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <main className="relative z-10 w-full h-full px-0 py-8 flex-grow flex flex-col md:flex-row-reverse items-center justify-start gap-8 md:gap-40">
        
        {/* الترويسة (Header) - المنتصف */}
        <div className="w-full md:flex-1 flex items-center md:justify-start justify-center md:pl-16">
          <header className="text-center">
            <h2 className="text-amber-400 font-cairo text-xl md:text-4xl mb-6 font-bold drop-shadow-md">
              صدقة جارية لأبي رحمة الله علية 
            </h2>
            <h1 className="text-4xl md:text-8xl text-white font-fantezy font-bold tracking-wider leading-relaxed drop-shadow-lg py-4">
              أ/ محمد عبدالمنعم جودة
            </h1>
            <p className="text-gray-300 font-diwani text-xl md:text-3xl mt-2 mx-auto leading-relaxed text-center">
              "اللهم اجعل قبره روضة من رياض الجنة، واغفر له وارحمه برحمتك التي وسعت كل شيء"
            </p>

            {/* معلومات الميلاد والوفاة + عداد الوقت المنقضي */}
            <div className="mt-6 md:mt-8 rounded-2xl p-3 md:p-5 w-full max-w-[280px] md:max-w-lg mx-auto bg-black/30 md:bg-transparent md:glass-panel border border-amber-500/15 md:border-amber-500/20 backdrop-blur-sm md:backdrop-blur-[12px]">
              {/* التواريخ والعمر */}
              <div className="flex justify-center gap-3 md:gap-6 mb-3 md:mb-5">
                <div className="text-center">
                  <p className="text-amber-400 font-cairo text-[10px] md:text-sm mb-0.5 md:mb-1">المولود في</p>
                  <p className="text-white/90 font-cairo font-bold text-xs md:text-base">28 نوفمبر 1964</p>
                </div>
                <div className="text-amber-500/50 text-xl self-center">|</div>
                <div className="text-center">
                  <p className="text-amber-400 font-cairo text-[10px] md:text-sm mb-0.5 md:mb-1">توفي بتاريخ</p>
                  <p className="text-white/90 font-cairo font-bold text-xs md:text-base">27 فبراير 2021</p>
                </div>
                <div className="text-amber-500/50 text-xl self-center">|</div>
                <div className="text-center">
                  <p className="text-amber-400 font-cairo text-[10px] md:text-sm mb-0.5 md:mb-1">توفي بعمر</p>
                  <p className="text-white/90 font-cairo font-bold text-xs md:text-base">56 سنة</p>
                </div>
              </div>

              {/* عنوان العداد */}
              <p className="text-amber-300/90 font-cairo text-xs md:text-base text-center mb-3 md:mb-4 font-semibold tracking-wide">
                مضى على وفاته رحمه الله
              </p>

              {/* صفوف العداد */}
              <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <div className="bg-emerald-900/40 md:bg-emerald-900/60 border border-amber-500/15 md:border-amber-500/20 rounded-xl py-1.5 md:py-2 px-1 text-center">
                  <p className="text-lg md:text-3xl text-white font-bold font-cairo leading-none">{timeElapsed.years}</p>
                  <p className="text-amber-400 font-cairo text-[10px] md:text-xs mt-0.5 md:mt-1">سنة</p>
                </div>
                <div className="bg-emerald-900/40 md:bg-emerald-900/60 border border-amber-500/15 md:border-amber-500/20 rounded-xl py-1.5 md:py-2 px-1 text-center">
                  <p className="text-lg md:text-3xl text-white font-bold font-cairo leading-none">{timeElapsed.months}</p>
                  <p className="text-amber-400 font-cairo text-[10px] md:text-xs mt-0.5 md:mt-1">شهر</p>
                </div>
                <div className="bg-emerald-900/40 md:bg-emerald-900/60 border border-amber-500/15 md:border-amber-500/20 rounded-xl py-1.5 md:py-2 px-1 text-center">
                  <p className="text-lg md:text-3xl text-white font-bold font-cairo leading-none">{timeElapsed.days}</p>
                  <p className="text-amber-400 font-cairo text-[10px] md:text-xs mt-0.5 md:mt-1">يوم</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* المحتوى على اليمين */}
        <div className="w-full md:flex-1 flex flex-col items-center max-w-xl">
          {/* أزرار التنقل */}
          <div className="flex justify-center gap-4 mb-8 w-full">
            <button 
              onClick={() => setActiveTab('tasbeeh')}
              className={`font-cairo px-4 py-2 text-sm md:text-base rounded-full font-bold transition-all duration-300 flex items-center gap-1 md:gap-2 ${activeTab === 'tasbeeh' ? 'bg-amber-500 text-emerald-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass-panel text-amber-500 hover:bg-emerald-800/50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 8 4 4-4 4-4-4 4-4Z"/></svg>
              المسبحة الإلكترونية
            </button>
            <button 
              onClick={() => setActiveTab('adhkar')}
              className={`font-cairo px-4 py-2 text-sm md:text-base rounded-full font-bold transition-all duration-300 flex items-center gap-1 md:gap-2 ${activeTab === 'adhkar' ? 'bg-amber-500 text-emerald-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass-panel text-amber-500 hover:bg-emerald-800/50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              الأذكار والدعاء
            </button>
          </div>

          {/* عرض محتوى المسبحة */}
          {activeTab === 'tasbeeh' && (
            <div className="glass-panel rounded-3xl p-3 md:p-10 flex flex-col items-center animate-fade-in-up w-full max-w-[240px] sm:max-w-xs md:max-w-sm mx-auto mt-4 md:mt-8">
              
              {/* اختيار التسبيح */}
              <div className="relative w-full mb-4 md:mb-8">
                <select 
                  value={currentTasbeehIndex}
                  onChange={(e) => setCurrentTasbeehIndex(Number(e.target.value))}
                  className="w-full bg-emerald-900/50 border border-amber-500/30 text-amber-400 font-amiri text-base md:text-xl rounded-xl py-2 md:py-3 px-3 md:px-4 text-center appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  style={{textAlignLast: 'center'}}
                >
                  {tasbeehList.map((t, index) => (
                    <option key={t.id} value={index} className="bg-emerald-950 text-white">
                      {t.text}
                    </option>
                  ))}
                </select>
                {/* مؤشر السهم لتمييز أنه قائمة منسدلة */}
                <svg className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-amber-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

              {/* النص الحالي الكبير */}
              <h3 className="text-xl md:text-4xl text-white font-amiri text-center leading-relaxed mb-3 md:mb-6 min-h-[40px] md:min-h-[60px] flex items-center justify-center">
                {currentTasbeeh.text}
              </h3>

              {/* دائرة العداد والضغط */}
              <div className="relative mb-4 md:mb-8 flex flex-col items-center mt-3 md:mt-6">
                <button 
                  onClick={handleTasbeehClick}
                  className="w-20 h-20 md:w-56 md:h-56 mx-auto rounded-full bg-gradient-to-tr from-emerald-800 to-emerald-600 border-4 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex flex-col items-center justify-center transform transition-transform active:scale-95 hover:brightness-110"
                >
                  <span className="text-3xl md:text-7xl font-cairo font-bold text-white mb-1 md:mb-2">
                    {currentCount}
                  </span>
                  <span className="text-amber-200 font-cairo text-[10px] md:text-sm">
                    الهدف: {currentTasbeeh.target}
                  </span>
                </button>

                {/* زر التصفير */}
                <button 
                  onClick={resetCurrentTasbeeh}
                  className="mt-3 md:mt-4 bg-amber-500 hover:bg-amber-400 text-emerald-950 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm flex items-center gap-1.5 md:gap-2 shadow-md"
                  title="تصفير العداد"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  تصفير
                </button>
              </div>

              {/* إجمالي الحسنات (عداد عام) */}
              <div className="w-full pt-3 md:pt-6 border-t border-amber-500/20 text-center">
                <p className="text-gray-400 font-cairo text-xs md:text-sm mb-0.5 md:mb-1">مجموع التسبيحات الكلي</p>
                <p className="text-xl md:text-2xl text-amber-500 font-bold font-cairo">{totalCount}</p>
              </div>
            </div>
          )}

          {/* عرض محتوى الأذكار */}
          {activeTab === 'adhkar' && (
            <div className="space-y-6 animate-fade-in-up pb-10 w-full max-h-[600px] overflow-y-auto">
              {adhkarList.map((dhikr, index) => (
                <div key={index} className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
                  <h3 className="text-xl text-amber-400 font-cairo font-bold mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 7-5-5-5 5"/><path d="m17 17-5 5-5-5"/></svg>
                    {dhikr.title}
                  </h3>
                  <p className="text-white font-amiri text-2xl leading-relaxed mb-4 text-justify">
                    {dhikr.content}
                  </p>
                  {dhikr.count > 1 && (
                    <div className="inline-block bg-emerald-900/80 border border-emerald-700 text-emerald-100 px-4 py-1 rounded-full font-cairo text-sm">
                      تُقرأ {dhikr.count} مرات
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* التذييل (Footer) */}
      <footer className="relative z-10 w-full bg-black/60 backdrop-blur-md border-t border-amber-500/20 py-4 text-center">
        <p className="text-gray-400 font-cairo text-sm">
        نسألكم الدعاء له بالرحمة والمغفرة.
        </p>
      </footer>

      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}
