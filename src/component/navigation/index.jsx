import { useLocation } from "react-router-dom";
import Button from "./Button";

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="navi">
      <ul className="navi_content">
        <li>
          <Button
            path="/harbrel"
            value="파메계산기"
            selected={currentPath === "/harbrel" || currentPath === "/"}
          />
        </li>
        <li>
          <Button path="/ella" value="엘라어 생성기" selected={currentPath === "/ella"} />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
