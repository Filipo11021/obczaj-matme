export type TeamItem = {
  name: string;
  image: { url: string };
  description: string;
};

export type ResponseTeam = {
    data: {
        team_items: TeamItem[]
    }
}
