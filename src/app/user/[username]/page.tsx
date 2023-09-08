type ProfileProps = {
  params: {
    username: string
  }
}

const Profile = (props: ProfileProps) => {
  const { params } = props
  const { username } = params

  return <div>{username}</div>
}

export default Profile
