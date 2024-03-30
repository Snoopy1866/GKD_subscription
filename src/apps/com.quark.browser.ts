import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.quark.browser',
  name: '夸克浏览器',
  groups: [
    {
      key: 0,
      name: '局部广告-小说阅读页面底部广告',
      activityIds: 'com.ucpro.BrowserActivity',
      rules: [
        '[id="com.quark.browser:id/tv_close_ad"][text="关闭广告"]',
        '[id="com.quark.browser:id/ad_close_layout_container"]',
      ],
    },
    {
      key: 2,
      name: '功能类-设置默认浏览器提示',
      desc: '点击取消',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.ucpro.BrowserActivity',
      rules: '@Button[text="取消"] + Button[text="去设置"]',
      snapshotUrls: 'https://i.gkd.li/i/13249469',
    },
    {
      key: 3,
      name: '更新提示',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@Button[text="取消"] + Button[text="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13292512',
        },
        {
          key: 1,
          matches: '@Button[text="取消"] + Button[text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/13455360',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.ucpro.BrowserActivity',
      rules: 'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13292571',
    },
  ],
});
