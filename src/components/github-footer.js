import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export default @connect(
	state => ({
		current: state.login.current
	})
)

class GitHubFooter extends React.Component {
	static propTypes = {
		current: PropTypes.object
	}

	static defaultProps = {
		current: null
	}

	state = {
		hover: false
	}

	// eslint-disable-next-line
	render() {
		const {hover} = this.state;
		const {current} = this.props;
		const heartColor = current ? current.profile_link_color : '#ff4321';
		const id = current && current.unique_id;
		let icon;

		switch (id) {
			case '~0GEiS3Pmyk4':
				icon = <polygon transform="translate(59 0)" id="Path" stroke={hover ? '#222' : '#CED4E0'} fill={hover ? '#FEC102' : '#CED4E0'} points="1.35324013 16.0131813 2.12545841 8.38040276 4.00048234 7.70594573 3.04733547 4.37867322 10.6097916 1.01318132 11.9646973 6.04636666 7.70994217 6.99682558 7.41480532 9.67330644 4.36075716 10.3394699"/>;
				break;
			case '~_gu-GJfAR14':
				icon = (
					<g transform="translate(58 0)" id="watermelon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Group" fillRule="nonzero">
							<path d="M0.025,12.075 C4.075,15.975 10.925,15.975 14.975,12.05 L7.5,0 L0.025,12.075 Z" id="Path" fill={hover ? '#FF5555' : '#CED4E0'}/>
							<path d="M1,10.5 L0.725,10.9 C3.675,13.5 9.925,14.525 14.3,10.875 L14,10.5 C10.225,13.375 4.775,13.375 1,10.5 Z" id="Path" fill={hover ? '#CEFF80' : '#fff'}/>
							<path d="M0.725,10.9 L0,12.05 C4.05,15.975 10.925,15.975 15,12.025 L14.3,10.875 C10.425,14 4.575,14 0.725,10.9 Z" id="Path" fill={hover ? '#8CC63E' : '#CED4E0'}/>
							<g transform="translate(3.500000, 3.500000)" fill={hover ? '#3E4347' : '#fff'} id="Path">
								<path d="M0,5.625 C0,5.3 0.6,4.475 0.6,4.475 C0.6,4.475 1.225,5.325 1.225,5.65 C1.225,5.975 0.975,6.225 0.625,6.225 C0.275,6.225 0,5.95 0,5.625"/>
								<path d="M3.1,6.775 C3.1,6.45 3.7,5.625 3.7,5.625 C3.7,5.625 4.325,6.475 4.325,6.8 C4.325,7.125 4.075,7.375 3.725,7.375 C3.375,7.375 3.1,7.1 3.1,6.775"/>
								<path d="M5.125,3.875 C5.125,3.55 5.725,2.725 5.725,2.725 C5.725,2.725 6.35,3.575 6.35,3.9 C6.35,4.225 6.1,4.475 5.75,4.475 C5.4,4.475 5.125,4.2 5.125,3.875"/>
								<path d="M7.175,6.625 C7.175,6.3 7.775,5.475 7.775,5.475 C7.775,5.475 8.4,6.325 8.4,6.65 C8.4,6.975 8.15,7.225 7.8,7.225 C7.45,7.2 7.175,6.95 7.175,6.625"/>
								<path d="M2.8,1.225 C2.8,0.9 3.4,0.075 3.4,0.075 C3.4,0.075 4,0.925 4,1.25 C4,1.575 3.75,1.825 3.4,1.825 C3.075,1.8 2.8,1.55 2.8,1.225"/>
							</g>
							<g transform="translate(1.500000, 11.750000)" fill={hover ? '#64892F' : '#CED4E0'} id="Path">
								<path d="M5.05,1.425 L5.05,3.2 C5.675,3.25 6.3,3.25 6.925,3.2 L6.925,1.425 C6.325,1.475 5.675,1.475 5.05,1.425"/>
								<path d="M0.65,0.1 L0.1,1.55 C0.625,1.9 1.2,2.175 1.775,2.425 L2.35,0.875 C1.775,0.675 1.2,0.4 0.65,0.1"/>
								<path d="M11.35,0.1 C10.8,0.4 10.225,0.675 9.625,0.875 L10.2,2.425 C10.775,2.175 11.35,1.9 11.875,1.55 L11.35,0.1"/>
							</g>
						</g>
					</g>
				);
				break;
			case '~cR7wa6HOags':
				icon = (
					<g id="Page-1" stroke="none" strokeWidth="1.25" fill="none" fillRule="evenodd">
						<g id="xj-middle-front" transform="translate(57.500000, 1.00000)">
							<path d="M7.57929766,11.6382671 C8.77155822,11.6382671 9.38473528,10.4539562 10.7197159,11.1194606 L10.7616705,11.1408632 C11.8367937,11.7017496 13.9423077,10.9352036 13.9423077,10.4291546 C13.9423077,9.65914219 11.0934911,7.01923077 7.57929766,7.01923077 C4.06510425,7.01923077 0.865384615,9.65914219 0.865384615,10.4291546 C0.865384615,10.9166424 3.41255566,11.7261975 4.36686737,11.1584898 L4.39529408,11.1408632 C5.49649288,10.4291546 6.31238097,11.6382671 7.57929766,11.6382671 Z" id="Oval" stroke={hover ? '#E3B1BC' : '#CED4E0'} fill={hover ? '#F4E0E5' : '#fff'}/>
							<path d="M7.5,8.01331502 C9.21244141,8.01331502 10.4533568,9.79448607 12.0780434,9.79448607 C13.9082206,9.79448607 15,8.65665649 15,6.53846154 C15,2.92736894 11.6421356,0 7.5,0 C3.35786438,0 0,2.92736894 0,6.53846154 C0,8.97564143 1.77690718,9.868557 4.04478794,9.49345242 C5.13715459,9.31277637 6.15345308,8.01331502 7.5,8.01331502 Z" id="Oval" stroke={hover ? '#E3B1BC' : '#CED4E0'} fill={hover ? '#F4E0E5' : '#fff'}/>
							<path d="M3.65384615,4.85576923 C3.65384615,6.59233907 4.67665614,8.02603043 6.0001619,8.24130566 C5.71795803,8.44291263 5.3933867,8.55769231 5.04807692,8.55769231 C3.95943871,8.55769231 3.07692308,7.41687941 3.07692308,6.00961538 C3.07692308,5.26739875 3.3224124,4.59930081 3.71415614,4.13360083 C3.67466327,4.36644354 3.65384615,4.60802416 3.65384615,4.85576923 Z" id="Path" fill={hover ? '#E3B1BC' : '#CED4E0'}/>
							<path d="M11.1923736,4.85680857 C11.1923736,6.59337841 10.1695636,8.02706976 8.84605785,8.24234499 C9.12826172,8.44395196 9.45283305,8.55873164 9.79814283,8.55873164 C10.886781,8.55873164 11.7692967,7.41791875 11.7692967,6.01065472 C11.7692967,5.26843809 11.5238074,4.60034015 11.1320636,4.13464016 C11.1715565,4.36748288 11.1923736,4.6090635 11.1923736,4.85680857 Z" id="Path" fill={hover ? '#E3B1BC' : '#CED4E0'}/>
							<path d="M7.54809924,3.49117786 C7.92055754,3.93221819 8.17307692,4.78702709 8.17307692,5.76923077 C8.17307692,6.75138955 7.92058062,7.60616521 7.54815031,8.04722319 C7.17557322,7.60616521 6.92307692,6.75138955 6.92307692,5.76923077 C6.92307692,4.79887033 7.16954335,3.95285097 7.53463405,3.50731179 L7.54809924,3.49117786 Z" id="Path" fill={hover ? '#E3B1BC' : '#CED4E0'}/>
						</g>
					</g>
				);
				break;
			case '~hRdoXDpzrwQ':
				icon = (
					<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(57.500000, 1.50000)">
						<path d="M11.25,0 L13.5,2.25 L13.5,6 L15,6 L15,7.5 L13.5,7.5 L13.5,11.25 L1.5,11.25 L1.5,7.5 L0,7.5 L0,6 L1.5,6 L1.5,2.25 L3.75,0 L6,2.25 L9,2.25 L11.25,0 Z M6,5.25 L4.5,5.25 L4.5,8.25 L6,8.25 L6,5.25 Z M10.5,5.25 L9,5.25 L9,8.25 L10.5,8.25 L10.5,5.25 Z" id="Combined-Shape" fill={hover ? heartColor : '#CED4E0'} fillRule="nonzero"/>
					</g>
				);
				break;
			default:
				break;
		}

		return (
			<svg
				width="150"
				height="15"
				viewBox="0 0 150 15"
				onMouseEnter={() => this.setState({hover: true})}
				onMouseLeave={() => this.setState({hover: false})}
			>
				<g id="Canvas" transform="translate(-1193 39)">
					<g id="github">
						<g id="Union">
							<use xlinkHref="#path0_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path1_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path2_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path3_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path4_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path5_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path6_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path7_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path8_fill" transform="translate(1204 -38)" fill={hover ? heartColor : '#CED4E0'}/>
							<use xlinkHref="#path9_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path10_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path11_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path12_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path13_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path14_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path15_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path16_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
							<use xlinkHref="#path17_fill" transform="translate(1204 -38)" fill={hover ? '#222' : '#CED4E0'}/>
						</g>
					</g>
				</g>
				{icon}
				<defs>
					<path id="path0_fill" d="M 102.342 9.9389L 102.362 9.9389L 102.371 9.94882L 102.369 9.94931L 102.366 9.94981C 102.362 9.94891 102.358 9.94659 102.355 9.94432C 102.351 9.94158 102.347 9.9389 102.342 9.9389Z"/>
					<path id="path1_fill" d="M 102.212 9.96526C 102.278 9.95691 102.332 9.95017 102.366 9.94981C 102.443 9.96368 102.51 10.0291 102.51 10.1272L 102.51 11.6135C 102.51 11.6829 102.48 11.7523 102.421 11.7721C 102.322 11.8216 101.688 11.9901 101.163 11.9901C 100.013 11.9901 98.3286 11.7424 98.3286 9.32454L 98.3286 6.07436L 97.2286 6.07436C 97.1395 6.07436 97.0602 5.99508 97.0602 5.88608L 97.0602 4.53844C 97.0602 4.45917 97.1097 4.3898 97.189 4.36999C 97.2584 4.36008 98.3385 4.09253 98.3385 4.09253L 98.3385 1.94225C 98.3385 1.86298 98.3881 1.81344 98.4772 1.81344L 100.618 1.81344C 100.707 1.81344 100.756 1.86298 100.756 1.94225L 100.756 4.03307L 102.332 4.03307C 102.411 4.03307 102.49 4.11235 102.49 4.20153L 102.49 5.88608C 102.49 5.99508 102.421 6.07436 102.332 6.07436L 100.756 6.07436L 100.756 9.1759C 100.756 9.64163 101.024 9.99836 101.797 9.99836C 101.951 9.99836 102.1 9.97948 102.212 9.96526Z"/>
					<path id="path2_fill" fillRule="evenodd" d="M 125.232 11.9802C 127.154 11.9802 128.254 11.0091 128.254 7.61027C 128.254 4.21144 126.5 3.76553 125.311 3.76553L 125.321 3.78535C 124.132 3.78535 123.319 4.31053 123.319 4.31053L 123.319 0.574799C 123.319 0.485619 123.24 0.406342 123.151 0.406342L 121.04 0.406342C 120.951 0.406342 120.872 0.485619 120.872 0.574799L 120.852 11.5838C 120.852 11.673 120.941 11.7523 121.04 11.7523L 122.507 11.7523C 122.566 11.7523 122.616 11.7325 122.646 11.673C 122.695 11.6135 122.735 11.1577 122.735 11.1577C 122.735 11.1577 123.607 11.9802 125.232 11.9802ZM 124.36 5.81672C 125.123 5.73744 125.846 5.97527 125.846 7.76881C 125.846 9.66145 125.519 10.0281 124.499 9.99836C 123.775 9.97854 123.29 9.64163 123.29 9.64163L 123.29 6.15363C 123.29 6.15363 123.765 5.85635 124.36 5.81672Z"/>
					<path id="path3_fill" d="M 119.603 4.03307L 119.613 4.03307C 119.722 4.03307 119.802 4.11235 119.802 4.20153L 119.782 11.6036C 119.782 11.6928 119.722 11.7721 119.613 11.7721L 118.286 11.7721C 118.216 11.7721 118.147 11.7325 118.127 11.6829C 118.097 11.6235 118.048 11.237 118.048 11.237C 118.048 11.237 116.928 12 115.551 12C 113.876 12 112.657 11.455 112.657 9.27499L 112.657 4.21144C 112.657 4.12226 112.736 4.04298 112.826 4.04298L 114.946 4.04298C 115.035 4.04298 115.115 4.12226 115.115 4.21144L 115.115 8.91827C 115.115 9.66145 115.333 9.99836 116.076 9.99836C 116.819 9.99836 117.364 9.6119 117.364 9.6119L 117.364 4.22135C 117.364 4.11235 117.423 4.03307 117.532 4.03307L 119.603 4.03307Z"/>
					<path id="path4_fill" d="M 94.0181 4.02317L 96.1288 4.02317C 96.2179 4.02317 96.2972 4.10244 96.2972 4.19162L 96.2972 4.20153L 96.2972 11.4946C 96.2972 11.673 96.2477 11.7622 96.0494 11.7622L 94.147 11.7622C 93.9785 11.7622 93.8496 11.6928 93.8496 11.4946L 93.8496 4.22135C 93.8496 4.11235 93.929 4.02317 94.0181 4.02317Z"/>
					<path id="path5_fill" d="M 93.7208 2.04134C 93.7208 1.27834 94.3253 0.67389 95.0883 0.67389C 95.8314 0.67389 96.4359 1.27834 96.4359 2.04134C 96.4359 2.80434 95.8314 3.40881 95.0883 3.40881C 94.3253 3.40881 93.7208 2.80434 93.7208 2.04134Z"/>
					<path id="path6_fill" d="M 109.338 0.426163L 111.428 0.426163C 111.518 0.426163 111.597 0.505433 111.597 0.594613L 111.597 11.6036C 111.597 11.6928 111.518 11.7721 111.428 11.7721L 109.318 11.7721C 109.229 11.7721 109.149 11.6928 109.149 11.6036L 109.169 6.89681L 105.889 6.89681L 105.889 11.6036C 105.889 11.6928 105.81 11.7721 105.721 11.7721L 103.61 11.7721C 103.531 11.7721 103.442 11.6928 103.442 11.6036L 103.442 0.594613C 103.442 0.505433 103.521 0.426163 103.61 0.426163L 105.721 0.426163C 105.81 0.426163 105.889 0.505433 105.889 0.594613L 105.889 4.64744L 109.169 4.64744L 109.169 0.594613C 109.169 0.505433 109.248 0.426163 109.338 0.426163Z"/>
					<path id="path7_fill" d="M 92.73 10.9893L 92.73 5.30145C 92.73 5.21226 92.6506 5.13299 92.5416 5.13299L 88.8357 5.13299C 88.7267 5.13299 88.6473 5.21226 88.6473 5.30145L 88.6473 7.12472C 88.6473 7.2139 88.7267 7.29318 88.8357 7.29318L 90.2922 7.29318L 90.2922 9.57227C 90.2922 9.57227 89.9653 9.68127 89.0536 9.68127C 87.9835 9.68127 86.4971 9.29482 86.4971 6.0149C 86.4971 2.73499 88.0627 2.3188 89.5194 2.3188C 90.6477 2.3188 91.1945 2.49405 91.5526 2.60885C 91.594 2.62209 91.6328 2.63453 91.6697 2.6458C 91.7787 2.67553 91.8678 2.56653 91.8678 2.47735L 92.2841 0.713524C 92.2841 0.663979 92.2642 0.624344 92.2246 0.574799C 92.0858 0.485619 91.2139 6.91752e-05 89.0536 6.91752e-05C 86.5565 -0.00984141 84 1.04053 84 6.1338C 84 11.2271 86.9232 12 89.3905 12C 91.4319 12 92.6704 11.1181 92.6704 11.1181C 92.72 11.0983 92.73 11.0289 92.73 10.9893Z"/>
					{icon ? null : <path id="path8_fill" d="M 59.2 2C 58.6801 1.37 57.95 1.05 57 1C 56.03 1 55.3101 1.42 54.8 2C 54.29 2.58 54.02 2.92 54 3C 53.98 2.92 53.72 2.58 53.2 2C 52.6801 1.42 52.03 1 51 1C 50.05 1.05 49.3101 1.38 48.8 2C 48.28 2.61 48.02 3.28 48 4C 48 4.52 48.09 5.52 48.67 6.67C 49.25 7.82 51.01 9.61 54 12C 56.98 9.61 58.77 7.83 59.34 6.67C 59.91 5.51 60 4.5 60 4C 59.98 3.28 59.72 2.61 59.2 1.98L 59.2 2Z"/>}
					<path id="path9_fill" d="M 9.5 2L 8 3.5L 11.5 7L 8 10.5L 9.5 12L 14 7L 9.5 2Z"/>
					<path id="path10_fill" d="M 4.5 2L 0 7L 4.5 12L 6 10.5L 2.5 7L 6 3.5L 4.5 2Z"/>
					<path id="path11_fill" fillRule="evenodd" d="M 64.728 8.872C 64.5786 8.41467 64.504 7.92 64.504 7.388C 64.504 6.856 64.5786 6.36134 64.728 5.904C 64.8773 5.43733 65.1013 5.036 65.4 4.7C 65.6986 4.35467 66.0674 4.084 66.506 3.888C 66.9447 3.692 67.4486 3.594 68.0179 3.594C 68.5967 3.594 69.1007 3.692 69.53 3.888C 69.9686 4.084 70.3373 4.35467 70.636 4.7C 70.9347 5.036 71.1587 5.43733 71.308 5.904C 71.4573 6.36134 71.532 6.856 71.532 7.388C 71.532 7.92 71.4573 8.41467 71.308 8.872C 71.1587 9.32933 70.9347 9.73067 70.636 10.076C 70.3373 10.412 69.9686 10.678 69.53 10.874C 69.1007 11.0607 68.5967 11.154 68.0179 11.154C 67.4486 11.154 66.9447 11.0607 66.506 10.874C 66.0674 10.678 65.6986 10.412 65.4 10.076C 65.1013 9.73067 64.8773 9.32933 64.728 8.872ZM 65.932 6.226C 65.8199 6.562 65.764 6.94933 65.764 7.388C 65.764 7.82667 65.8199 8.21867 65.932 8.564C 66.0533 8.9 66.2167 9.18467 66.422 9.418C 66.6273 9.642 66.8654 9.81467 67.136 9.936C 67.416 10.0573 67.71 10.118 68.0179 10.118C 68.326 10.118 68.6154 10.0573 68.886 9.936C 69.166 9.81467 69.4087 9.642 69.614 9.418C 69.8193 9.18467 69.978 8.9 70.09 8.564C 70.2113 8.21867 70.272 7.82667 70.272 7.388C 70.272 6.94933 70.2113 6.562 70.09 6.226C 69.978 5.88067 69.8193 5.59133 69.614 5.358C 69.4087 5.12466 69.166 4.94733 68.886 4.826C 68.6154 4.70467 68.326 4.644 68.0179 4.644C 67.71 4.644 67.416 4.70467 67.136 4.826C 66.8654 4.94733 66.6273 5.12466 66.422 5.358C 66.2167 5.59133 66.0533 5.88067 65.932 6.226Z"/>
					<path id="path12_fill" d="M 72.9351 11L 72.9351 3.762L 74.0551 3.762L 74.0551 4.91L 74.083 4.91C 74.5778 4.03267 75.3617 3.594 76.4351 3.594C 76.911 3.594 77.3077 3.65933 77.6251 3.79C 77.9424 3.92067 78.1991 4.10267 78.395 4.336C 78.5911 4.56934 78.7264 4.84934 78.801 5.176C 78.885 5.49333 78.927 5.848 78.927 6.24L 78.927 11L 77.7371 11L 77.7371 6.1C 77.7371 5.652 77.6064 5.29733 77.3451 5.036C 77.0837 4.77467 76.7244 4.644 76.2671 4.644C 75.9031 4.644 75.5857 4.7 75.3151 4.812C 75.0537 4.924 74.8344 5.08266 74.6571 5.288C 74.4797 5.49333 74.3444 5.736 74.2511 6.016C 74.1671 6.28667 74.1251 6.58534 74.1251 6.912L 74.1251 11L 72.9351 11Z"/>
					<path id="path13_fill" d="M 26.064 11L 28.374 3.762L 27.142 3.762L 25.5179 9.684L 25.49 9.684L 23.978 3.762L 22.676 3.762L 21.22 9.684L 21.192 9.684L 19.554 3.762L 18.238 3.762L 20.562 11L 21.85 11L 23.306 5.246L 23.334 5.246L 24.804 11L 26.064 11Z"/>
					<path id="path14_fill" d="M 30.7654 2.46L 30.7654 1.004L 29.5753 1.004L 29.5753 2.46L 30.7654 2.46Z"/>
					<path id="path15_fill" d="M 29.5753 3.762L 29.5753 11L 30.7654 11L 30.7654 3.762L 29.5753 3.762Z"/>
					<path id="path16_fill" d="M 34.2609 3.762L 34.2609 1.592L 33.0709 1.592L 33.0709 3.762L 31.8389 3.762L 31.8389 4.812L 33.0709 4.812L 33.0709 9.418C 33.0709 9.754 33.1035 10.0247 33.1689 10.23C 33.2343 10.4353 33.3323 10.594 33.4629 10.706C 33.6029 10.818 33.7803 10.8973 33.9949 10.944C 34.2189 10.9813 34.4849 11 34.7928 11L 35.7029 11L 35.7029 9.95L 35.1569 9.95C 34.9702 9.95 34.8163 9.94534 34.6949 9.936C 34.5829 9.91734 34.4943 9.88467 34.4288 9.838C 34.3635 9.79134 34.3169 9.726 34.2889 9.642C 34.2703 9.558 34.2609 9.446 34.2609 9.306L 34.2609 4.812L 35.7029 4.812L 35.7029 3.762L 34.2609 3.762Z"/>
					<path id="path17_fill" d="M 37.0249 1.004L 37.0249 11L 38.215 11L 38.215 6.912C 38.215 6.58534 38.257 6.28667 38.3409 6.016C 38.4342 5.736 38.5696 5.49333 38.7469 5.288C 38.9242 5.08266 39.1436 4.924 39.4049 4.812C 39.6755 4.7 39.9929 4.644 40.3569 4.644C 40.8142 4.644 41.1736 4.77467 41.4349 5.036C 41.6963 5.29733 41.8269 5.652 41.8269 6.1L 41.8269 11L 43.0168 11L 43.0168 6.24C 43.0168 5.848 42.9749 5.49333 42.8909 5.176C 42.8163 4.84934 42.6809 4.56934 42.4849 4.336C 42.2889 4.10267 42.0322 3.92067 41.715 3.79C 41.3976 3.65933 41.0009 3.594 40.5249 3.594C 40.3102 3.594 40.0862 3.61733 39.8529 3.664C 39.6289 3.71067 39.4095 3.78533 39.1949 3.888C 38.9896 3.98133 38.8029 4.10733 38.6349 4.266C 38.4669 4.41534 38.3362 4.602 38.2429 4.826L 38.215 4.826L 38.215 1.004L 37.0249 1.004Z"/>
				</defs>
			</svg>
		);
	}
}
