import type { UserType } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<UserType>();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <div className={styles.container}>
      {/* TODO: Maybe add a search bar? */}
      {/* <div className={styles.searchContainer}>
        <Input.Search
          className={styles.searchInput}
          placeholder="Search for any/file/path"
        />
      </div> */}
      <div className={styles.avatarContainer}>
        <div className={styles.nameContainer}>
          <div style={{ fontSize: 12 }}>Hello, </div>
          <div className={styles.name}>{user?.name}</div>
        </div>
        <Image
          src={user?.image! ?? "/favicon.ico"} // TODO: Get a nicer placeholder.
          width="30%"
          height="30%"
          layout="fixed"
          alt="Profile image"
          className={styles.avatar}
        />
      </div>
    </div>
  );
};

export default Navbar;
