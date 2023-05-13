import Profile from "./Profile";
import user from 'path/to/user.json';

const App = () => {
    return 
    <div>
              <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    </div>
}

export default App