import { css } from 'lit';

export const styles = [
  css`
    :host {
      display: flex;
      color: #040424;
      height: 82%;
      overflow: hidden;
      border: solid;
      border-color: white;
      border-radius: 20px;
      justify-content: center;
      --card-color: black;
      --card-text-color: white;
      --detail-color: black;
      --detail-text-color: white;
      --accent-color: white;
      --divider: 2px solid var(--accent-color);
      --border: 2px solid var(--accent-color);
      --border-radius: 8px;
    }

    * {
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    .fit {
      position: absolute;
      inset: 0;
    }

    a {color:white; text-decoration:none;}

    .divider {
      will-change: opacity;
      border-bottom: var(--divider);
    }

    .divider-top {
      will-change: opacity;
      border-top: var(--divider);
    }

    .container {
      width: 600px;
      margin-top: 30px;
      position: relative;
    }

    .cards {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      height: 50%;
      flex-wrap: wrap;
    }

    li {
      will-change: transform;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: 1;
      flex-basis: 25%;
      cursor: pointer;
      font-size:10px;
      margin: 12px;
      padding: 1px;
      border-radius: var(--border-radius);
      background: var(--card-color);
      color: var(--card-text-color);
    }

    li:hover {
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 33, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
      );
      color: white;
      transition: 0.3s;
    }

    .card-background {
      will-change: opacity;
      border-radius: var(--border-radius);
      border: var(--border);
    }

    .card-content {
      flex: 1;
      display: flex;
      align-items: center;
      font-weight: 100;
      justify-content: center;
    }

    .card-header {
      padding: 2px;
      min-height: 2px;
      font-size: 11px;
    }

    .video {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
    }
    .video iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 5px;
      border-radius: 8px;
      border-style: solid;
      border-color: #444;
      background-color: #222;
    }
    .card-header-title {
      font-weight: 80;
      padding: 20px;
      padding-top: 15px;
      padding-left: 10px;
    }

    .detail {
      will-change: transform;
      display: flex;
      flex-direction: column;
      flex: 1;
      color: var(--detail-text-color);
      margin: 3px;
      padding: 6px;
      border-radius: 2px;
      height: 80%;
      overflow: hidden;
      background: var(--detail-color);
      border-radius: var(--border-radius);
      border: var(--border);
    }

    .detail-header {
      display: flex;
      align-items: center;
    }

    .detail-header-title {
      font-weight: 200;
    }

    .hero-text {
      will-change: transform;
      display: inline-block;
      width: 360px;
    }

    .detail-header-text {
      margin-left: 8px;
    }
    .title {font-size:18px;}
    .slim {
      font-size:15px;
    }
    p {font-size: 12px;}
    .detail-content {
      padding: 5px;
      font-weight: 100;
      line-height: 100%;
    }
  `,
];
