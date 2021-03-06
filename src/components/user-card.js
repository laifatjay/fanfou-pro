import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default @withRouter @connect(
	_ => ({}),
	dispatch => ({
		fetchUser: dispatch.user.fetch,
		follow: dispatch.follows.follow,
		unfollow: dispatch.follows.unfollow,
		thenFollow: dispatch.requests.follow,
		accept: dispatch.requests.accept,
		deny: dispatch.requests.deny
	})
)

class UserCard extends React.Component {
	static propTypes = {
		history: PropTypes.object.isRequired,
		type: PropTypes.string,
		user: PropTypes.object,
		fetchUser: PropTypes.func,
		follow: PropTypes.func,
		unfollow: PropTypes.func,
		thenFollow: PropTypes.func,
		accept: PropTypes.func,
		deny: PropTypes.func
	}

	static defaultProps = {
		type: '',
		user: null,
		fetchUser: () => {},
		follow: () => {},
		unfollow: () => {},
		thenFollow: () => {},
		accept: () => {},
		deny: () => {}
	}

	goToUser = async id => {
		const {history, fetchUser} = this.props;
		await fetchUser({id, format: 'html'});
		history.push(`/${id}`);
	}

	getButtons = () => {
		const {user, accept, thenFollow, deny} = this.props;
		const pronounce = user.gender === '女' ? '她' : '他';

		let button = (
			<>
				<Primary
					onClick={async () => {
						await accept(user.id);
						thenFollow(user.id);
					}}
				>
					接受请求并关注{pronounce}
				</Primary>
				<Normal onClick={() => accept(user.id)}>接受请求</Normal>
				<Normal onClick={() => deny(user.id)}>拒绝请求</Normal>
			</>
		);

		if (user.accept) {
			button = <Disable>已接受</Disable>;
		}

		if (user.following) {
			button = <Disable>已关注</Disable>;
		}

		if (user.deny) {
			button = <Disable>已拒绝</Disable>;
		}

		return <div>{button}</div>;
	}

	render() {
		const {type, user, follow, unfollow} = this.props;

		if (!user) {
			return null;
		}

		return (
			<Container>
				<AvatarLink onClick={() => this.goToUser(user.id)}>
					<Avatar src={user.profile_image_origin_large}/>
				</AvatarLink>
				<Content>
					<UserLink
						css="color: #222; font-weight: 600; line-height: 1.6;"
						onClick={() => this.goToUser(user.id)}
					>
						{user.name}
					</UserLink>
					{type === 'follows' ? (
						<div>
							{user.following ? <Normal onClick={() => unfollow(user.id)}>取消关注</Normal> : <Primary onClick={() => follow(user.id)}>关注此人</Primary>}
							{/* <DirectMessage>发送私信</DirectMessage> */}
						</div>
					) : null}
					{type === 'request' ? this.getButtons() : null}
				</Content>
			</Container>
		);
	}
}

const AvatarLink = styled.a`
	float: left;
	margin-left: -59px;
	margin-top: 3px;
	text-decoration: none;
	cursor: pointer;
`;

const UserLink = styled.a`
	text-decoration: none;
	color: #06c;
	font-size: 14px;
	cursor: pointer;

	&:hover {
		color: #06c;
	}

	&:visited {
		color: #06c;
	}
`;

const Avatar = styled.img`
	display: block;
	width: 48px;
	height: 48px;
	border-radius: 2px;
`;

const Content = styled.div`
`;

const Button = styled.button`
	box-sizing: border-box;
	width: auto;
	padding: 0 15px;
	height: 20px;
	font-size: 12px;
	border: 0;
	outline: 0;
	border-radius: 3px;
`;

const Primary = styled(Button)`
	background-color: #0cf;
	color: white;
	cursor: pointer;
`;

const Normal = styled(Button)`
	background-color: #f0f0f0;
	color: #333;
	cursor: pointer;
`;

const Disable = styled(Button)`
	background-color: #f0f0f0;
	color: #33333399;
`;

// Const DirectMessage = styled(Button)`
// 	background-color: #f0f0f0;
// 	color: #333;
// `;

const Container = styled.div`
	position: relative;
	border-bottom: 1px solid #eee;
	min-height: 50px;
	height: auto;
	padding: 9px 50px 12px 62px;
	overflow: hidden;

	&:hover {
		background-color: #f5f5f599;
	}

	${Button}:nth-child(n+2) {
		margin-left: 5px;
	}
`;
