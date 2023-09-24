import dynamic from "next/dynamic";

const GitHubButton = dynamic<any>(
  () => import("react-github-btn").then((mod) => mod.default),
  { ssr: false }
);

export const AppGithubButtons: React.FC = () => {
  return (
    <div className="flex gap-4">
      <GitHubButton
        href="https://github.com/invitedtea"
        aria-label="Code on @InvitedTea on GitHub"
      >
        Code on @InvitedTea
      </GitHubButton>
    </div>
  );
};
