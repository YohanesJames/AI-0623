(function () {
  'use strict';

  const groups = [
    {
      id: 'cabin',
      zh: '内部算法功能',
      en: 'Internal Algorithm Functions',
      descriptionZh: '面向驾驶员、乘员与座舱场景的内部算法能力。',
      descriptionEn: 'Internal algorithm capabilities for drivers, passengers, and in-cabin scenarios.'
    },
    {
      id: 'road',
      zh: '外部算法功能',
      en: 'External Algorithm Functions',
      descriptionZh: '面向道路环境、车辆身份与盲区风险的外部算法能力。',
      descriptionEn: 'External algorithm capabilities for road environments, vehicle identity, and blind-zone risks.'
    }
  ];

  const algorithms = {
    dms: {
      id: 'dms', group: 'cabin', icon: 'dms',
      zh: 'DMS 驾驶员监测', en: 'DMS',
      summaryZh: '识别疲劳、分心、抽烟、打电话等驾驶员状态。',
      summaryEn: 'Detects fatigue, distraction, smoking, phone use, and other driver states.'
    },
    'facial-recognition': {
      id: 'facial-recognition', group: 'cabin', icon: 'face',
      zh: '人脸识别', en: 'Facial Recognition',
      summaryZh: '面向授权驾驶员与人员身份核验的视觉识别能力。',
      summaryEn: 'Visual identity recognition for authorized drivers and personnel workflows.'
    },
    'p3-passenger-flow': {
      id: 'p3-passenger-flow', group: 'cabin', icon: 'passengers',
      zh: 'P3 客流统计', en: 'P3 Passenger Flow',
      summaryZh: '用于上下客人数统计与客流趋势分析的视觉能力。',
      summaryEn: 'Visual passenger counting for boarding, alighting, and flow analysis.'
    },
    'volume-measurement': {
      id: 'volume-measurement', group: 'cabin', icon: 'volume',
      zh: '体积测量', en: 'Volume Measurement',
      summaryZh: '基于配置化视觉输入对目标体积进行估算。',
      summaryEn: 'Estimates target volume from configured visual inputs.'
    },
    adas: {
      id: 'adas', group: 'road', icon: 'adas',
      zh: 'ADAS 驾驶辅助', en: 'ADAS',
      summaryZh: '感知道路车辆、行人、车道与前向碰撞风险。',
      summaryEn: 'Perceives vehicles, pedestrians, lanes, and forward-collision risks.'
    },
    'license-plate-recognition': {
      id: 'license-plate-recognition', group: 'road', icon: 'plate',
      zh: '车牌识别', en: 'License Plate Recognition',
      summaryZh: '检测并识别车牌字符，支持车辆通行与运营记录。',
      summaryEn: 'Detects and recognizes license plates for vehicle-access and operations records.'
    },
    bsw: {
      id: 'bsw', group: 'road', icon: 'bsw',
      zh: 'BSW 盲区预警', en: 'BSW',
      summaryZh: '监测车辆盲区目标并输出风险预警事件。',
      summaryEn: 'Monitors configured blind zones and produces risk-warning events.'
    }
  };

  function iconSvg(name) {
    const paths = {
      dms: '<path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z"/><circle cx="12" cy="12" r="2.2"/><path d="M8 4.5A8.5 8.5 0 0112 3c1.5 0 2.9.4 4.1 1.1"/>',
      face: '<path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3"/><circle cx="12" cy="10" r="3"/><path d="M7.5 18c.8-2.4 2.3-3.6 4.5-3.6s3.7 1.2 4.5 3.6"/>',
      passengers: '<circle cx="9" cy="8" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M4.5 18c.5-3.4 2-5 4.5-5s4 1.6 4.5 5M14 14c2.7-.4 4.4.9 5 4"/><path d="M4 5h4M4 5l2-2M4 5l2 2"/>',
      volume: '<path d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10"/><path d="M7 13h2M15 13h2"/>',
      adas: '<path d="M5 20l3-16M19 20L16 4M10.5 20l.5-4M13.5 20l-.5-4"/><path d="M9 12h6l1 3H8l1-3z"/><circle cx="9.5" cy="15.5" r=".8"/><circle cx="14.5" cy="15.5" r=".8"/>',
      plate: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h4M7 14h2M14 10h3M13 14h4"/><path d="M3 9V6h3M21 9V6h-3M3 15v3h3M21 15v3h-3"/>',
      bsw: '<path d="M5 15l1.5-4.5A2 2 0 018.4 9h7.2a2 2 0 011.9 1.5L19 15"/><path d="M4 15h16v4H4z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M19 7c1.2.5 2 1.5 2 2.8M18 4c2.9.8 5 3.2 5 6"/>'
    };
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || paths.dms) + '</svg>';
  }

  window.AlgorithmLibrary = { groups, algorithms, iconSvg };
})();
