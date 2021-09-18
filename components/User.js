export function User({ user }) {
    return (
        <li>
            {user.name} - {user.email}
        </li>
    );
}
