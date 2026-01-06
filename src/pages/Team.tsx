import React from 'react';
import { Link } from 'react-router-dom';
import './People.css';
import piPhoto from '../assets/fulbabu.png';


const Team: React.FC = () => {
    // Member interface for type safety (optional but good practice)
    interface Member {
        name: string;
        role: string;
        type: string;
        image?: string;
        link?: string;
        photoStyle?: React.CSSProperties;
        socialLinks?: {
            icon: string;
            url: string;
            label?: string;
            color?: string; // Optional custom color
        }[];
    }

    const piMember: Member = {
        name: "Dr. Md F. Shaikh",
        role: "Principal Investigator",
        type: "pi",
        image: piPhoto,
        link: "/people/pi",
        photoStyle: { objectPosition: 'center top', height: '300px' },
        socialLinks: [
            { icon: "ai ai-google-scholar", url: "https://scholar.google.com/citations?user=hH9eGJUAAAAJ&hl=en", label: "Google Scholar" },
            { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/md-fulbabu-shaikh-a17936133/", label: "LinkedIn" },
            { icon: "ai ai-orcid", url: "https://orcid.org/0000-0003-4341-8370", label: "ORCID" },
            { icon: "fab fa-twitter", url: "https://x.com/ShaiKhBioPhys", label: "X (Twitter)" }
        ]
    };

    const groupMembers: Member[] = [
        {
            name: "Dr. X",
            role: "Postdoctoral Researcher",
            type: "postdoc",
            // image: postdocPhoto, // Uncomment when photo is available
            photoStyle: { objectPosition: 'center 20%' },
            socialLinks: [
                { icon: "ai ai-google-scholar", url: "#", label: "Google Scholar" },
                { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" },
                { icon: "fab fa-twitter", url: "#", label: "X (Twitter)" }
            ]
        },
        {
            name: "Y",
            role: "Graduate Student",
            type: "student",
            socialLinks: [
                { icon: "ai ai-orcid", url: "#", label: "ORCID" },
                { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" }
            ]
        },
        {
            name: "Z",
            role: "Graduate Student",
            type: "student",
            socialLinks: [
                { icon: "ai ai-google-scholar", url: "#", label: "Google Scholar" }
            ]
        },
        {
            name: "AB",
            role: "Graduate Student",
            type: "student",
            socialLinks: [
                { icon: "fab fa-linkedin", url: "#", label: "LinkedIn" }
            ]
        },
    ];

    const renderSocialLinks = (member: Member) => {
        if (!member.socialLinks || member.socialLinks.length === 0) return null;
        return (
            <div className="member-social-links" style={{ display: 'flex', gap: '0.8rem', marginTop: '0.8rem', justifyContent: 'center' }}>
                {member.socialLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        style={{ color: link.color || '#666', fontSize: '1.1rem', transition: 'color 0.2s' }}
                        className="member-social-icon"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
        );
    };

    return (
        <div className="people-page">
            <div className="container">
                <div className="page-header">
                    <h1>The Team</h1>
                    <div className="header-line" style={{ margin: '0 auto' }}></div>
                </div>

                {/* PI Section - Centered Top Row */}
                <div className="pi-highlight" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
                    <div className="member-card pi-card" style={{ maxWidth: '300px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <Link to={piMember.link!} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <img
                                src={piMember.image}
                                alt={piMember.name}
                                className="member-photo"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', ...piMember.photoStyle }}
                            />
                        </Link>
                        <div className="member-info" style={{ padding: '1.5rem', textAlign: 'center' }}>
                            <Link to={piMember.link!} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <h3 style={{ fontSize: '1.4rem', color: '#002058' }}>{piMember.name}</h3>
                                <p className="member-role" style={{ fontSize: '1.1rem', fontWeight: 500 }}>{piMember.role}</p>
                            </Link>
                            {renderSocialLinks(piMember)}
                        </div>
                    </div>
                </div>

                <div className="members-grid">
                    {groupMembers.map((member, index) => (
                        <div key={index} className="member-card">
                            {member.link ? (
                                <a href={member.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="member-photo"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', ...member.photoStyle }}
                                        />
                                    ) : (
                                        <div className="member-photo-placeholder" style={{ height: member.photoStyle?.height || '250px' }}></div>
                                    )}
                                </a>
                            ) : (
                                <>
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="member-photo"
                                            style={{ width: '100%', height: '250px', objectFit: 'cover', ...member.photoStyle }}
                                        />
                                    ) : (
                                        <div className="member-photo-placeholder" style={{ height: member.photoStyle?.height || '250px' }}></div>
                                    )}
                                </>
                            )}

                            <div className="member-info">
                                {member.link ? (
                                    <a href={member.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <h3>{member.name}</h3>
                                        <p className="member-role">{member.role}</p>
                                    </a>
                                ) : (
                                    <>
                                        <h3>{member.name}</h3>
                                        <p className="member-role">{member.role}</p>
                                    </>
                                )}
                                {renderSocialLinks(member)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
