export const transformMemberData = (notionMember: any) => {
    const { properties } = notionMember;
  
    return {
      name: properties.Name.title?.[0]?.text?.content,
      reg: properties.RegistrationNumber.rich_text?.[0]?.text?.content,
      picture: properties.Picture.url,
      designation: {
        role: properties.DesignationRole.rich_text?.[0]?.text?.content,
        description: properties.DesignationDescription.rich_text?.[0]?.text?.content,
      },
      emoji: properties.Emoji.rich_text?.[0]?.text?.content,
      PrimaryTeam: properties.PrimaryTeam.select?.name,
      SecondaryTeam: properties.SecondaryTeam.select?.name,
      MemberSince: properties.MemberSince.rich_text?.[0]?.text?.content,
      FavoriteDessert: properties.FavoriteDessert.rich_text?.[0]?.text?.content,
      confidential: {
        Phone: properties.Phone.phone_number,
        id: notionMember.id,
      },
    };
  };
  