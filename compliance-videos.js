(function () {
  'use strict';

  const sharedDemonstrationVideos = Object.freeze([
    {
      src: 'mp4/R131-02/131-02动态车.mp4',
      zh: '车对车移动目标场景',
      en: 'Car-to-car moving target scenario'
    },
    {
      src: 'mp4/R131-02/70VS0.mp4',
      zh: '车对车静止目标场景',
      en: 'Car-to-car stationary target scenario'
    },
    {
      src: 'mp4/R131-02/带护栏静止目标.mp4',
      zh: '带护栏静止目标测试',
      en: 'Stationary Target with Guardrail'
    },
    {
      src: 'mp4/R131-02/行人横穿.mp4',
      zh: '行人横穿测试',
      en: 'Pedestrian Crossing Test'
    },
    {
      src: 'mp4/R131-02/误响应左右转.mp4',
      zh: '左右转误响应测试',
      en: 'False Activation During Left and Right Turns'
    },
    {
      src: 'mp4/R131-02/路口左右转.mp4',
      zh: '路口左右转测试',
      en: 'Left and Right Turns at Intersections'
    }
  ]);

  const ais162Videos = Object.freeze([
    {
      src: 'mp4/AIS162/Car-to-car moving target scenario.mp4',
      zh: '车对车移动目标场景',
      en: 'Car-to-car moving target scenario'
    }
  ]);

  const tfl25Videos = Object.freeze([
    {
      src: 'mp4/TFL2.5/web/tfl25-bcrs.mp4',
      zh: 'BCRS 测试',
      en: 'BCRS Test'
    },
    {
      src: 'mp4/TFL2.5/web/tfl25-bpna75-daytime.mp4',
      zh: 'BPNA-75 白天测试',
      en: 'BPNA-75 Daytime Test'
    },
    {
      src: 'mp4/TFL2.5/web/tfl25-bpna25-daytime.mp4',
      zh: 'BPNA25 白天测试',
      en: 'BPNA25 Daytime Test'
    },
    {
      src: 'mp4/TFL2.5/web/tfl25-bpna75-nighttime.mp4',
      zh: 'BPNA75 夜间测试',
      en: 'BPNA75 Nighttime Test'
    },
    {
      src: 'mp4/TFL2.5/web/tfl25-false-reaction.mp4',
      zh: '误响应测试',
      en: 'False Reaction Test'
    }
  ]);

  const gb39901Videos = Object.freeze([
    {
      src: 'mp4/GB-39901/web/gb39901-static-vehicle-target.mp4',
      zh: '静止车辆目标测试',
      en: 'Static Vehicle Target Test'
    }
  ]);

  const jtT1242Videos = Object.freeze([
    {
      src: 'mp4/JT-T1242/web/jtt1242-static-vehicle-target.mp4',
      zh: '静止车辆目标测试',
      en: 'Static Vehicle Target Test'
    }
  ]);

  const bswRegulationVideos = Object.freeze([
    {
      src: 'mp4/BSW/regulation/Frontview-BSW.mp4',
      zh: '前视 BSW 法规测试',
      en: 'Front-view BSW Regulation Test'
    },
    {
      src: 'mp4/BSW/regulation/R151-Bus turning.mp4',
      zh: '公交车转弯测试（R151）',
      en: 'Bus Turning Test (R151)'
    },
    {
      src: 'mp4/BSW/regulation/TFL2.5-Bus turning.mp4',
      zh: '公交车转弯测试（TFL2.5）',
      en: 'Bus Turning Test (TFL2.5)'
    }
  ]);

  const additionalAlgorithmVideos = Object.freeze([
    {
      src: 'mp4/other/web/body-worn-enforcement-camera.mp4',
      zh: '单兵执法仪',
      en: 'Body-worn Law Enforcement Camera'
    },
    {
      src: 'mp4/other/web/school-bus-left-behind-detection.mp4',
      zh: '校车防遗留',
      en: 'School Bus Passenger-left-behind Detection'
    },
    {
      src: 'mp4/other/web/rail-transit-body-recognition.mp4',
      zh: '轨交肢体识别',
      en: 'Rail Transit Body Recognition'
    }
  ]);

  window.ComplianceVideoLibrary = Object.freeze({
    'R131-02': sharedDemonstrationVideos,
    'R152-02': sharedDemonstrationVideos,
    'TFL2.5': tfl25Videos,
    'AIS-162': ais162Videos,
    'GB-39901': gb39901Videos,
    'JT-T1242': jtT1242Videos,
    'BSW': bswRegulationVideos,
    'OTHER-ALGORITHMS': additionalAlgorithmVideos
  });
})();
