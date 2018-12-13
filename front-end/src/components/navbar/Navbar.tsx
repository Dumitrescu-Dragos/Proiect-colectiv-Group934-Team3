import * as React from 'react'

interface INavbarProps {
	guest ?: string;
	user ?: string;
}

interface INavbarStates {
	guest: string;
	user: string;
}

export default class Navbar extends React.Component<INavbarProps, INavbarStates> {

    public constructor (props: INavbarProps) {
        super(props);
		
		this.state = {
			guest: 'guestPlaceholder';
			user: 'userPlaceholder';
		}
    }
	
	public render() {
		return (
			<div className='navbar'>
				<div className='guest-dropdown'>
					<button className='guest-dropbtn'>{this.state.guest}</button>
					<div className='guest-content'>
						<a href='Placeholder1'>Home</a>
						<a href='Placeholder2'><button className='register'>Register</button></a>
					</div>
				</div> 
				<div className='user-dropdown'>
					<button className='user-dropbtn'>{this.state.user}</button>
					<div className='user-content'>
						<a href='Placeholder3'>Home</a>
						<a href='Placeholder4'><button className='my-profile'>My Profile</button></a>
						<a href='Placeholder5'><button className='add-ad'>Add Ad</button></a>
					</div>
				</div>
			</div>
		);
	}
}