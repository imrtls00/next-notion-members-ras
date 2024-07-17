// This function takes in an array of data and simplifies it
function simplifyData(data: any[]) {


    const simplifiedData = data.map((item) => {
        
        var fileURL;
        var emoji;
        var roleDescription;
        var favoriteDessert;
        var secondaryTeam;
        
        if (item.properties.MyPicture.files.length === 0) {
            fileURL = 'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png';
        } else {
            fileURL = item.properties.MyPicture.files[0].file.url;
        }
        
        if (item.icon == null) {
            emoji = "💜"
        } else {
            emoji = item.icon.emoji;
        }

        if (item.properties.RoleDescription.rich_text.length === 0) {
            roleDescription = "Not Available";
        } else {
            roleDescription = item.properties.RoleDescription.rich_text[0].plain_text;
        }

        if (item.properties.FavoriteDessert.select == null) {
            favoriteDessert = "Doesn't like sweets :)";
        } else {
            favoriteDessert = item.properties.FavoriteDessert.select.name;
        }

        if (item.properties.SecondaryTeam.select == null) {
            secondaryTeam = "none";
        } else {
            secondaryTeam = item.properties.SecondaryTeam.select.name;
        }

        

        return {
            name: item.properties.Name.title[0].text.content,
            reg: item.properties.Email.email.split('@')[0],
            picture: fileURL,
            designation: {
                role: item.properties.Designation.select.name,
                desription: roleDescription
            },
            emoji: emoji,
            PrimaryTeam: item.properties.PrimaryTeam.select?.name,
            SecondaryTeam: secondaryTeam,
            MemberSince: item.properties.MemberSince.select?.name,
            FavoriteDessert: favoriteDessert,
            confidential: {
                Phone: item.properties.Phone.phone_number,
                id: item.id
            }
        };
    });
    return simplifiedData;
}

export default simplifyData;