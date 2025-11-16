import Head from 'next/head'

export default function Home() {
  const downloadLinks = [
    {
      name: "RoCleaner для Windows",
      url: "https://drive.google.com/drive/folders/11crQ8SF7L0JmbcN6LHb_o4Y3JwTNYPq6?usp=sharing",
      icon: "windows"
    },
    {
      name: "RoCleaner для Linux",
      url: "https://drive.google.com/drive/folders/1pAVDjhBtpicZmpYMkR1msMDNDeNc2GMt?usp=sharing",
      icon: "linux"
    },
      {
      name: "RoCleaner для ArchLinux",
      url: "https://drive.google.com/drive/folders/1pAVDjhBtpicZmpYMkR1msMDNDeNc2GMt?usp=sharing",
      icon: "arch"
    }
  ]

  const Icon = ({ name, size = 24 }) => {
    const icons = {
      linux: (
        <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="white"/>
          <path d="M11.3063 21.91C11.181 21.7232 11.0714 21.4713 10.9824 21.1699C9.37571 19.358 10.6169 16.6916 11.8446 14.881C11.9623 14.6874 12.0905 14.5004 12.2299 14.3215C13.1666 13.1577 13.4089 12.3478 13.481 11.2521C13.4896 11.0481 13.4727 10.7781 13.4533 10.4678C13.3542 8.8837 13.1895 6.25174 16.0159 6.0184C19.5489 5.72669 19.2611 8.97105 19.235 10.8732C19.2339 10.9519 19.2328 11.0285 19.2321 11.1024C19.2225 12.249 19.8209 13.0341 20.4455 13.8535C20.6736 14.1528 20.9052 14.4566 21.112 14.7843C21.1181 14.794 21.1242 14.8038 21.1303 14.8135C22.2218 16.3877 23.2994 18.737 21.7995 20.9653C21.5887 21.7259 21.2695 22.424 20.8434 22.9921C19.3136 25.0052 17.9539 24.8008 16.892 24.6412C16.5717 24.5931 16.2785 24.549 16.0159 24.5711C15.5797 24.5977 15.2301 24.6682 14.9281 24.7292C13.7608 24.9648 13.3046 25.0569 11.3063 21.91Z" fill="#000000"/>
          <path d="M18.0139 7.79452C17.9811 8.72691 16.9921 9.53681 15.8065 9.61167C14.6209 9.68654 13.6907 8.97873 13.7235 8.04633C13.7562 7.11393 14.7453 6.30404 15.9309 6.22917C17.1165 6.16112 18.0466 6.86212 18.0139 7.79452Z" fill="url(#paint0_linear_87_7435)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8656 10.0609C15.8751 10.5679 16.1073 11.0002 16.4334 11.1955C15.3695 11.1002 14.0512 11.4891 14.0512 12.2252C14.0348 13.4703 13.3418 15.0195 12.8429 16.1346C12.7447 16.3543 12.654 16.5571 12.5774 16.7374C12.2686 17.5021 12.0833 18.32 12.0614 19.1221C11.2435 17.9947 11.8378 16.5484 12.1582 15.9207C12.5846 15.0947 12.5764 14.9916 12.4108 15.1852C11.7759 16.2648 10.5803 18.4333 12.0775 19.736C12.125 20.3177 12.2667 20.8813 12.5185 21.3994C14.5228 25.4421 18.2761 23.7815 19.5141 21.6853C19.6788 21.3872 19.812 21.0989 19.9177 20.8203C19.9797 20.8593 20.0461 20.8895 20.1167 20.9094C20.739 21.0932 21.6691 20.3922 21.8918 19.9566C22.1604 19.3781 21.8853 18.9833 20.9683 18.5137C20.9215 18.4906 20.8753 18.4688 20.8297 18.4485C21.1814 16.9676 20.2122 15.4276 19.52 14.7743C19.3909 14.7424 19.3727 14.8156 19.5731 15.0155C20.009 15.4333 20.9572 16.9228 20.4442 18.3091C20.3597 18.2864 20.2784 18.2704 20.2009 18.2616C20.0433 17.3158 19.6231 16.58 19.3294 16.0658C19.2629 15.9493 19.2029 15.8442 19.1538 15.7506C19.055 15.5617 18.9368 15.3661 18.8114 15.1587C18.3283 14.3594 17.739 13.3843 17.739 11.9393C17.6651 11.6214 17.3651 11.4094 16.9658 11.2923C17.4293 11.1988 17.7772 10.6573 17.7652 10.0065C17.7521 9.30545 17.3132 8.74737 16.7892 8.76099C16.2652 8.7746 15.846 9.3599 15.8656 10.0609ZM16.2979 10.2174C16.2914 10.6054 16.4748 10.9184 16.7172 10.9184C16.953 10.9184 17.156 10.6054 17.1626 10.2242C17.1691 9.83631 16.9857 9.52324 16.7434 9.52324C16.501 9.52324 16.3045 9.83631 16.2979 10.2174Z" fill="url(#paint1_linear_87_7435)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5556 11.1498C14.9355 11.1294 15.2106 10.619 15.1779 10.0133C15.1451 9.40754 14.8111 8.93794 14.4311 8.95835C14.0512 8.97877 13.7761 9.48921 13.8089 10.0949C13.8416 10.7006 14.1757 11.1702 14.5556 11.1498ZM14.7848 10.2242C14.8176 10.5441 14.6997 10.8163 14.5294 10.8436C14.3591 10.864 14.1953 10.6258 14.1626 10.3059C14.1298 9.98604 14.2477 9.7138 14.418 9.68658C14.5883 9.66616 14.7521 9.90436 14.7848 10.2242Z" fill="url(#paint2_linear_87_7435)"/>
          <path d="M16.3961 9.99963C16.3764 10.2174 16.4747 10.3944 16.6122 10.408C16.7498 10.4216 16.8808 10.2514 16.9004 10.0405C16.9201 9.82267 16.8218 9.64572 16.6843 9.63211C16.5467 9.6185 16.4157 9.78865 16.3961 9.99963Z" fill="url(#paint3_linear_87_7435)"/>
          <path d="M14.641 10.0542C14.6606 10.2312 14.5886 10.3877 14.4838 10.4013C14.379 10.4149 14.2807 10.2788 14.261 10.0951C14.2414 9.91811 14.3134 9.76158 14.4183 9.74797C14.5231 9.73436 14.6213 9.87728 14.641 10.0542Z" fill="url(#paint4_linear_87_7435)"/>
          <path d="M18.669 17.1525C18.669 18.3503 17.562 19.9021 15.6625 19.8885C13.7039 19.9021 12.8721 18.3503 12.8721 17.1525C12.8721 15.9547 14.169 14.9814 15.7673 14.9814C17.3721 14.9883 18.669 15.9547 18.669 17.1525Z" fill="url(#paint5_linear_87_7435)"/>
          <path d="M17.6346 13.3892C17.615 14.6279 16.8355 14.9205 15.8529 14.9205C14.8704 14.9205 14.1564 14.7367 14.0713 13.3892C14.0713 12.5453 14.8704 12.0552 15.8529 12.0552C16.8355 12.0484 17.6346 12.5385 17.6346 13.3892Z" fill="url(#paint6_linear_87_7435)"/>
          <path d="M11.6936 15.2947C12.3356 14.2807 13.6914 12.7221 11.9491 15.5125C10.5342 17.8129 11.4251 19.2898 11.8836 19.6981C13.2067 20.9232 13.1543 21.7467 12.1128 21.1001C9.87922 19.7185 10.3443 17.3909 11.6936 15.2947Z" fill="url(#paint7_linear_87_7435)"/>
          <path d="M20.9881 15.71C20.4314 14.519 18.6628 11.4972 21.0733 15.009C23.2676 18.1873 21.7283 20.3992 21.4532 20.617C21.1781 20.8348 20.2545 21.2771 20.5231 20.5081C20.7982 19.739 22.1606 18.2826 20.9881 15.71Z" fill="url(#paint8_linear_87_7435)"/>
          <path d="M11.2089 25.1021C9.74165 24.2922 7.61283 25.2586 8.38575 23.0671C8.54296 22.5703 8.15649 21.8217 8.4054 21.3384C8.70016 20.7463 9.33553 20.8756 9.71544 20.4809C10.0888 20.0726 10.3246 19.3648 11.0255 19.4736C11.7198 19.5825 12.1849 20.4673 12.6696 21.5562C13.0299 22.3321 14.3006 23.4278 14.2154 24.299C14.1106 25.6329 12.6499 25.8847 11.2089 25.1021Z" fill="url(#paint9_linear_87_7435)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87664 20.6404C9.51984 21.0307 8.86452 20.9371 8.60152 21.4477C8.43261 21.7756 8.61716 22.2796 8.64206 22.6387C8.67282 23.0824 8.30503 23.711 8.49233 24.0899C8.70268 24.5154 9.65296 24.4602 10.0707 24.5213C11.1019 24.6719 12.8063 26.0065 13.7388 24.9414C14.6504 23.9002 12.8982 22.5825 12.4684 21.6569C12.1889 21.0289 11.7706 19.825 10.992 19.7027C10.4431 19.6175 10.1931 20.2943 9.87664 20.6404ZM11.0583 19.2446C12.0278 19.3967 12.5129 20.6535 12.8707 21.4572C13.4138 22.6227 15.2747 23.8755 14.0686 25.2531C12.9732 26.5043 11.2438 25.1604 10.0086 24.98C9.39166 24.8898 8.41858 24.9546 8.09576 24.3015C7.81821 23.7401 8.2362 23.2316 8.1974 22.672C8.16434 22.1952 7.97565 21.6832 8.2077 21.2306C8.52537 20.5945 9.13864 20.7485 9.55546 20.3192C9.99809 19.8328 10.2634 19.1211 11.0583 19.2446Z" fill="#E68C3F"/>
          <path d="M21.3814 24.7278C22.4556 23.3735 24.8464 23.6525 23.2351 21.7945C22.8945 21.393 22.9993 20.5354 22.5801 20.1679C22.0888 19.7187 21.5451 20.0862 21.0473 19.8548C20.5495 19.603 20.0255 19.1198 19.4163 19.4601C18.8071 19.8072 18.7416 20.7056 18.6827 21.8898C18.6303 22.7405 17.8836 24.1629 18.2831 24.9456C18.8596 26.157 20.3596 25.9937 21.3814 24.7278Z" fill="url(#paint10_linear_87_7435)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8097 19.6982C22.0851 19.6909 22.415 19.7102 22.7248 19.9925C23.1101 20.3322 23.1139 20.8867 23.2592 21.351C23.4312 21.9008 24.0341 22.2149 23.998 22.8597C23.9391 23.9136 22.1138 24.1675 21.552 24.8759C21.0121 25.5447 20.3297 25.9429 19.6821 25.9966C18.7 26.078 17.8888 25.2522 17.9462 24.2439C17.9928 23.4276 18.4086 22.6861 18.4593 21.8764C18.4885 21.29 18.52 20.7464 18.626 20.305C18.7331 19.8589 18.9261 19.4748 19.3083 19.257C20.1453 18.7894 20.9539 19.7206 21.8097 19.6982ZM19.5219 19.6637C19.2953 19.7931 19.1512 20.0316 19.0586 20.4171C18.9649 20.8073 18.9341 21.3073 18.9043 21.9046C18.8543 22.7162 18.4377 23.4572 18.3913 24.2713C18.3499 24.9972 18.9075 25.5961 19.6467 25.5348C20.1484 25.4932 20.7272 25.1764 21.2091 24.5797C21.6397 24.0373 23.5137 23.5336 23.5529 22.8328C23.5785 22.3752 22.9765 21.9459 22.8351 21.4943C22.7245 21.1408 22.7187 20.5932 22.4355 20.3449C22.2545 20.1795 22.0641 20.1549 21.8209 20.1613C21.1162 20.1797 20.1761 19.2992 19.5219 19.6637Z" fill="#E68C3F"/>
          <path d="M20.9156 22.9174C22.5793 20.3652 21.3413 20.3856 20.9221 20.1882C20.5029 19.9841 20.0641 19.5825 19.5728 19.8616C19.0815 20.1474 19.0553 20.8824 19.0422 21.8489C19.0226 22.5431 18.4658 23.7069 18.7999 24.3534C19.206 25.1089 20.1885 24.0131 20.9156 22.9174Z" fill="url(#paint11_linear_87_7435)"/>
          <path d="M10.8682 23.2847C8.37909 21.6105 9.54502 21.0388 9.91839 20.7733C10.3704 20.433 10.3769 19.7797 10.9337 19.8409C11.4904 19.9022 11.8179 20.6168 12.1913 21.5016C12.4664 22.1345 13.4228 22.9784 13.3507 23.7066C13.259 24.5642 11.9424 23.9993 10.8682 23.2847Z" fill="url(#paint12_linear_87_7435)"/>
          <path d="M21.7481 19.9362C21.5516 20.2901 20.7525 20.8481 20.2219 20.6984C19.6783 20.5555 19.4294 19.7592 19.5407 19.1603C19.639 18.4797 20.2219 18.4457 20.9556 18.786C21.735 19.1535 21.9774 19.4666 21.7481 19.9362Z" fill="#000000"/>
          <path d="M21.2108 19.7389C21.0863 19.9839 20.5623 20.3718 20.1955 20.2697C19.8287 20.1676 19.6453 19.6164 19.7042 19.2012C19.7566 18.7316 20.1496 18.7044 20.6475 18.9358C21.1846 19.1944 21.3549 19.4122 21.2108 19.7389Z" fill="url(#paint13_linear_87_7435)"/>
          <path d="M14.4374 10.8576C14.6994 10.6057 15.3348 9.83668 16.54 10.6398C16.7627 10.7895 16.9461 10.8031 17.3719 10.9937C18.23 11.3612 17.8238 12.2459 16.9068 12.5454C16.5138 12.6747 16.1601 13.1715 15.4527 13.1239C14.8435 13.0899 14.6863 12.6747 14.3129 12.4501C13.6514 12.0622 13.5531 11.5381 13.9134 11.2591C14.2736 10.9801 14.4112 10.878 14.4374 10.8576Z" fill="url(#paint14_linear_87_7435)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9933 11.3703C13.8563 11.4764 13.8127 11.6174 13.858 11.7734C13.951 12.0938 14.6216 12.5345 14.8784 12.7501C15.0244 12.8727 15.1914 12.9699 15.4613 12.985C16.0393 13.0239 16.3603 12.5792 16.8667 12.4126C17.1997 12.3038 17.9044 11.8882 17.671 11.4119C17.4718 11.0054 16.8008 10.9803 16.4675 10.7563C15.8939 10.3742 15.4763 10.3769 15.1788 10.4841C14.8528 10.6016 14.2885 11.1416 13.9933 11.3703ZM15.0911 10.2215C15.4781 10.0821 15.9812 10.1021 16.6126 10.5228C17.0276 10.8018 17.659 10.7749 17.9093 11.2858C18.2282 11.9365 17.4555 12.5116 16.947 12.6777C16.4025 12.857 16.0983 13.3061 15.4447 13.2624C15.1058 13.2433 14.8884 13.1158 14.7103 12.9663C14.3408 12.6561 13.7165 12.3613 13.5738 11.8694C13.4946 11.5966 13.6101 11.3204 13.8334 11.1474C14.1943 10.8679 14.682 10.369 15.0911 10.2215Z" fill="#E68C3F"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4745 11.5671C17.4772 11.6182 17.4395 11.6619 17.3904 11.6646C16.6971 11.7039 16.2099 12.4951 15.427 12.4951C14.9889 12.4951 14.6421 12.2837 14.3941 12.0804C14.3442 12.0395 13.9033 11.6996 13.9033 11.613C13.9033 11.5618 13.9432 11.5203 13.9925 11.5203C14.0846 11.5203 14.3625 11.8219 14.4659 11.9067C14.6995 12.0982 15.0463 12.3098 15.427 12.3098C16.2021 12.3098 16.6776 11.5195 17.3806 11.4796C17.4298 11.4768 17.4718 11.516 17.4745 11.5671Z" fill="#E68C3F"/>
          <path d="M14.8442 10.7893C14.9752 10.6668 15.3878 10.3333 15.9315 10.6736C16.0494 10.7416 16.1673 10.8165 16.3376 10.9186C16.6848 11.1296 16.5145 11.4358 16.0952 11.6264C15.9053 11.7081 15.5909 11.885 15.3551 11.8714C15.0931 11.8442 14.9162 11.6672 14.7459 11.5515C14.4249 11.3338 14.4446 11.15 14.5952 11.0071C14.7066 10.8982 14.8311 10.7961 14.8442 10.7893Z" fill="url(#paint15_linear_87_7435)"/>
          <defs>
          <linearGradient id="paint0_linear_87_7435" x1="16.0578" y1="6.30617" x2="15.8364" y2="9.30598" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.8"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_87_7435" x1="12.8966" y1="22.6721" x2="11.2506" y2="17.2716" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEED7"/>
          <stop offset="1" stop-color="#BDBFC2"/>
          </linearGradient>
          <linearGradient id="paint2_linear_87_7435" x1="12.8966" y1="22.6721" x2="11.2506" y2="17.2716" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEED7"/>
          <stop offset="1" stop-color="#BDBFC2"/>
          </linearGradient>
          <linearGradient id="paint3_linear_87_7435" x1="16.6681" y1="9.65546" x2="16.5748" y2="10.3542" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint4_linear_87_7435" x1="14.434" y1="9.78294" x2="14.5344" y2="10.3483" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint5_linear_87_7435" x1="15.7613" y1="15.6306" x2="15.778" y2="19.6272" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.8"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint6_linear_87_7435" x1="15.8504" y1="13.1247" x2="15.8688" y2="14.7138" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint7_linear_87_7435" x1="11.72" y1="14.1055" x2="11.72" y2="19.9372" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint8_linear_87_7435" x1="21.033" y1="13.5359" x2="21.0308" y2="18.8052" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint9_linear_87_7435" x1="11.4286" y1="22.4374" x2="10.5354" y2="25.4214" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFA63F"/>
          <stop offset="1" stop-color="#FFFF00"/>
          </linearGradient>
          <linearGradient id="paint10_linear_87_7435" x1="19.882" y1="21.53" x2="22.2656" y2="24.7801" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFA63F"/>
          <stop offset="1" stop-color="#FFFF00"/>
          </linearGradient>
          <linearGradient id="paint11_linear_87_7435" x1="20.5198" y1="18.9333" x2="19.6863" y2="22.8605" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint12_linear_87_7435" x1="11.2464" y1="19.9042" x2="11.4117" y2="24.3239" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint13_linear_87_7435" x1="20.3755" y1="18.8616" x2="20.5688" y2="20.1822" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint14_linear_87_7435" x1="15.7644" y1="10.784" x2="15.7805" y2="13.1098" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFA63F"/>
          <stop offset="1" stop-color="#FFFF00"/>
          </linearGradient>
          <linearGradient id="paint15_linear_87_7435" x1="15.5106" y1="10.5638" x2="15.5062" y2="11.7936" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.65"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      ),
      windows: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
      ),
      security: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      speed: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"/>
        </svg>
      ),
      target: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8zm4-8a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4zm-2 0a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2z"/>
        </svg>
      ),
      download: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      ),
      arch: (
        <svg width="35px" height="35px" xmlns="http://www.w3.org/2000/svg"
          aria-label="Arch Linux" role="img"
          viewBox="0 0 512 512"><rect
          width="512" height="512"
          rx="15%"
          fill="#ffffff"/><path d="M256 72c-14 35-23 57-39 91 10 11 22 23 41 36-21-8-35-17-45-26-21 43-53 103-117 220 50-30 90-48 127-55-2-7-3-14-3-22v-1c1-33 18-58 38-56 20 1 36 29 35 62l-2 17c36 7 75 26 125 54l-27-50c-13-10-27-23-55-38 19 5 33 11 44 17-86-159-93-180-122-250z" fill="#1793d1"/>
        </svg>
      )
    }

    return icons[name] || null
  }

  return (
    <>
      <Head>
        <title>RoCleaner - Управление друзьями Roblox</title>
        <meta name="description" content="Бесплатное приложение для управления друзьями в Roblox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <div className="background-animation">
          <div className="gradient-ball ball-1"></div>
          <div className="gradient-ball ball-2"></div>
          <div className="gradient-ball ball-3"></div>
        </div>

        <header className="header">
          <div className="header-content">
            <h1 className="title-glitch">RoCleaner</h1>
            <p className="subtitle">Умное управление друзьями в Roblox</p>
          </div>
        </header>

        <main className="main">
          <section className="hero">
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title">Скачайте RoCleaner бесплатно</h2>
                <p className="hero-description">Простой и безопасный способ управления вашим списком друзей в Roblox</p>
              </div>
              
              <div className="features">
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="security" size={32} />
                  </div>
                  <h3>Безопасно</h3>
                  <p>Не требует пароля от аккаунта</p>
                </div>
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="speed" size={32} />
                  </div>
                  <h3>Быстро</h3>
                  <p>Массовое управление друзьями</p>
                </div>
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="target" size={32} />
                  </div>
                  <h3>Точно</h3>
                  <p>Гибкая система исключений</p>
                </div>
              </div>
            </div>
          </section>

          <section className="download-section">
            <div className="download-card glass-effect">
              <h2 className="download-title">Скачать RoCleaner</h2>
              <div className="download-links">
                {downloadLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="download-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="button-icon">
                      <Icon name={link.icon} size={24} />
                    </span>
                    <span className="button-text">{link.name}</span>
                    <span className="button-arrow">→</span>
                  </a>
                ))}
              </div>
              <p className="download-note">
                Откроется Google Drive. Нажмите "Скачать" в правом верхнем углу.
              </p>
            </div>
          </section>

          <section className="instructions">
            <h2 className="section-title">Как использовать</h2>
            <div className="steps-grid">
              <div className="step-card glass-effect">
                <div className="step-number">01</div>
                <h3>Скачайте приложение</h3>
                <p>Загрузите RoCleaner для Windows</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">02</div>
                <h3>Запустите программу</h3>
                <p>Откройте RoCleaner и следуйте инструкциям</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">03</div>
                <h3>Настройте исключения</h3>
                <p>Добавьте друзей в список исключений</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">04</div>
                <h3>Запустите очистку</h3>
                <p>Начните процесс и дождитесь завершения</p>
              </div>
            </div>
          </section>

          <section className="faq">
            <h2 className="section-title">Частые вопросы</h2>
            <div className="faq-grid">
              <div className="faq-card glass-effect">
                <h3>Безопасно ли это?</h3>
                <p>Да! Приложение использует только cookie для авторизации и не требует пароль от вашего аккаунта.</p>
              </div>
              
              <div className="faq-card glass-effect">
                <h3>На каких системах работает?</h3>
                <p>RoCleaner работает на Windows. Поддержка других систем в разработке.</p>
              </div>
              
              <div className="faq-card glass-effect free-card">
                <h3>Это бесплатно?</h3>
                <div className="free-gif-container">
                  <img 
                    src="https://media1.tenor.com/m/J4KBZSb6CMcAAAAd/%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE.gif" 
                    alt="Бесплатно" 
                    className="free-gif"
                  />
                </div>
                <p>Да, приложение полностью бесплатное и без скрытых платежей.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 RoCleaner. Не аффилирован с Roblox Corporation.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d1b69 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .gradient-ball {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .ball-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #667eea 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .ball-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .ball-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #f093fb 0%, transparent 70%);
          bottom: 10%;
          left: 20%;
          animation-delay: 4s;
        }

        .header {
          position: relative;
          z-index: 1;
          padding: 4rem 1rem 2rem;
          text-align: center;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title-glitch {
          font-size: 4rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitch 3s infinite;
        }

        .subtitle {
          font-size: 1.4rem;
          opacity: 0.8;
          margin: 1rem 0 0 0;
          font-weight: 300;
        }

        .main {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem 4rem;
        }

        .hero {
          padding: 4rem 0;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.3rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .feature-card {
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .feature-card p {
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .download-section {
          padding: 4rem 0;
        }

        .download-card {
          padding: 3rem;
          border-radius: 25px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .download-title {
          font-size: 2.5rem;
          margin: 0 0 2rem 0;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .download-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .download-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 15px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .download-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        .button-icon {
          display: flex;
          align-items: center;
        }

        .button-text {
          flex: 1;
          text-align: center;
        }

        .button-arrow {
          font-size: 1.2rem;
        }

        .download-note {
          opacity: 0.7;
          font-size: 0.9rem;
          margin: 0;
        }

        .instructions {
          padding: 4rem 0;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin: 0 0 3rem 0;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step-card {
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-5px);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1rem 0;
          opacity: 0.8;
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .step-card p {
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .faq {
          padding: 4rem 0;
        }

        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-card {
          padding: 2rem;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .faq-card:hover {
          transform: translateX(5px);
        }

        .free-card {
          position: relative;
          border: 2px solid rgba(102, 126, 234, 0.3);
        }

        .faq-card h3 {
          font-size: 1.2rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
          color: #667eea;
        }

        .free-gif-container {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }

        .free-gif {
          width: 150px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .faq-card p {
          margin: 0;
          opacity: 0.8;
          line-height: 1.6;
        }

        .footer {
          position: relative;
          z-index: 1;
          padding: 2rem 1rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer p {
          margin: 0;
          opacity: 0.6;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          5% {
            transform: translate(-2px, 2px);
          }
          10% {
            transform: translate(-2px, -2px);
          }
          15% {
            transform: translate(2px, 2px);
          }
          20% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(0);
          }
        }

        @media (max-width: 768px) {
          .title-glitch {
            font-size: 2.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .features {
            grid-template-columns: 1fr;
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .download-card {
            padding: 2rem 1.5rem;
          }
          
          .feature-card, .step-card, .faq-card {
            padding: 2rem 1.5rem;
          }
          
          .free-gif {
            width: 120px;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          background: #0f0f0f;
          color: #ffffff;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}













